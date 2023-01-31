import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import { Observable } from 'rxjs';
import DummyData from '../../assets/LV_Index_sampleData.json';
import { Lvdata } from '../service/lvdata';
import { RestService } from '../service/rest.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, } from '@angular/material/tree';
import { FileIconComponent } from '../icons/file-icon/file-icon.component';
import { L } from '@angular/cdk/keycodes';
import { NodeNetworkComponent } from '../visualization/node-network/node-network.component';
import { ResultDetailsComponent } from '../result-details/result-details.component';
import { ResultDataService } from '../resultdataservice';
import { thresholdScott } from 'd3';
import { Lesson } from "../service/DataTypes/lesson";
import { Course } from "../service/DataTypes/course";
import { File } from '../service/DataTypes/File';
import { exec } from 'child_process';


interface ResultNode {
    name: string
    id: number
    fileType: string
    author: string
    studiengang?: string
    year?: string
    keywords?: Set<string>
    children?: ResultNode[];
}

const TREE_DATA: ResultNode[] = [ /*dummy data*/
	{
		name: 'Machinelearning',
		id: 1,
		fileType: 'folder',
		author: '',
		studiengang: "BIF, AI",
		year: "2021/2022",
		keywords: new Set<string>(["ML", "AI", "KI"]),
		children: [
			{
				name: 'Self Study A',
				id: 2,
				fileType: 'folder',
				author: '',
				keywords: new Set<string>(["ML", "AI", "KI"]),
				studiengang: "BIF, AI",
				year: "2021/2022",
				children: [
					{
						name: 'Introduction.pdf',
						id: 3,
						fileType: 'pdf',
						keywords: new Set<string>(["ML", "AI", "KI", "Test"]),
						author: 'Jane Doe'
					}
				]
			},
			{
				name: 'Class 1',
				id: 4,
				fileType: 'folder',
				studiengang: "BIF, AI",
				year: "2021/2022",
				keywords: new Set<string>(["ML", "AI", "KI", "adgdag"]),
				author: '',
			},
			{
				name: 'Self Study B',
				id: 5,
				fileType: 'folder',
				author: '',
				keywords: new Set<string>(["ML", "AI", "KI", "Test"]),
				studiengang: "BIF, AI",
				year: "2021/2022",
				children: [
					{
						name: 'Skriptum_B.pdf',
						fileType: 'pdf',
						id: 6,
						author: 'John Doe',
						studiengang: "BIF, AI, BID",
						year: "2021/2022",
					}
				]
			},
		]
	}, {
		name: 'Einführung in die AI',
		id: 7,
		fileType: 'folder',
		author: '',
		studiengang: "AI",
		year: "2022/2023",
		children: [
			{
				name: 'Self Study A',
				id: 8,
				fileType: 'folder',
				author: '',
				children: [
					{
						name: 'Selfstudy_A.py',
						id: 9,
						fileType: 'python',
						author: 'Bob Doe'
					},
					{
						name: 'Skriptum_A.pdf',
						id: 10,
						fileType: 'pdf',
						author: 'Joe Biden'
					},
				]
			}, {
				name: 'Class 1',
				id: 11,
				fileType: 'folder',
				author: '',
				children: [
					{
						name: 'Folien_1.pdf',
						id: 12,
						fileType: 'pdf',
						author: 'Barack Hussein Obama'
					},
					{
						name: 'Examplecode.js',
						id: 13,
						fileType: 'js',
						author: 'George W. Bush Jr.'
					},
				]
			},
		]
	},
];

interface ExampleFlatNode { /* Struktur der Einzelnen Nodes des Baums*/
	expandable: boolean;
	id: number
	name: string;
	fileType: string
	author: string
	level: number;
}

interface search {
	found: boolean;
	ResultNode: ResultNode;
}

@Component({
	selector: 'app-result-table',
	templateUrl: './result-table.component.html',
	styleUrls: ['./result-table.component.css']
})

export class ResultTableComponent implements OnInit {
	@Input() resultDetails: ResultDetailsComponent;

	TEST_TREE_DATA = {};//: Course[] = [
	initData() {

		this.TEST_TREE_DATA["Machinelearning"] = {
			"Self Study A": new Lesson(
				"Self Study A",
				["ML", "AI", "KI"],
				[
					{
						Name: "Introduction.pdf",
						Type: "pdf",
						Author: "Jane Doe",
						Keywords: new Set<string>(["ML", "AI", "KI", "Test"]),
						SimilarFiles: []
					}
				]
			),
			"Self Study B": new Lesson(
				"Self Study B",
				["ML", "AI", "KI"],
				[
					{
						Name: "Skriptum_B.pdf",
						Type: "pdf",
						Author: "John Doe",
						Keywords: new Set<string>(["ML", "AI", "KI", "Test"]),
						SimilarFiles: []
					}
				]
			),
			"Class 1": new Lesson(
				"Class 1",
				["ML", "AI", "KI"],
				[]
			)
		};
		this.TEST_TREE_DATA["Einführung in die AI"] = {
			"Self Study A":
				new Lesson(
					"Self Study A",
					["ML", "AI", "KI"],
					[
						{
							Name: "Selfstudy_A.py",
							Type: "py",
							Author: "Bob Doe",
							Keywords: new Set<string>(["ML", "AI", "KI", "Test"]),
							SimilarFiles: []
						},
						{
							Name: "Skriptum_A.pdf",
							Type: "pdf",
							Author: "Joe Mamer",
							Keywords: new Set<string>(["ML", "AI", "KI", "Test"]),
							SimilarFiles: []
						}
					]
				),
			"Class 1": new Lesson(
				"Class 1",
				["ML", "AI", "KI"],
				[
					{
						Name: "Examplecode.js",
						Type: "js",
						Author: "George W. Bush Jr.",
						Keywords: new Set<string>(["ML", "AI", "KI", "Test"]),
						SimilarFiles: []
					},
					{
						Name: "Folien_1.pdf",
						Type: "pdf",
						Author: "Effrey Jepstein",
						Keywords: new Set<string>(["ML", "AI", "KI", "Test"]),
						SimilarFiles: []
					}
				]
			)
		}
	}
	// newsdata:any=DummyData;

	//displayedColumns: string[] = ['lv_id', 'lv_titel', 'studiengang', 'jahr', 'lv_type', 'progLang'];
	displayedColumns: string[] = ['name', 'filetype', 'author'];
	ResultDetailsComponent: any;
	///////////////////////Seunghyun hat von hier begonnen zu ändern bis:

	constructor(private restService: RestService, private dataService: ResultDataService) {
		this.dataSource.data = TREE_DATA;
	}



	private transformer = (node: ResultNode, level: number) => {
		return {
			expandable: !!node.children && node.children.length > 0,
			name: node.name,
			id: node.id,
			fileType: node.fileType,
			author: node.author,
			level: level,
		}
	}

	//durch "FlatTreeControl" Component wird level und 
	//expandable (regel für expandable wird in transformer() deklariert)
	//gesetzt; soweit ich den Code verstanden hab
	//bezieht sich auf alles was "node" hat, hab immer noch nicht wirklich ne ahnung wie node funktioniert aber it works
	treeControl = new FlatTreeControl<ExampleFlatNode>(
		node => node.level, node => node.expandable);

	treeFlattener = new MatTreeFlattener(
		this.transformer, node => node.level,
		node => node.expandable, node => node.children);

	dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

	isRoot = (_: number, node: ExampleFlatNode) => {
		if (node.level == 0) {
			_ = node.level;
			return true;
		}
		return false;
	}

	hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
	///////////////////////////hier

	// lvdata : Lvdata[] = [];

	ngOnInit(): void {
		//   this.restService.getDummyData().subscribe({
		//     next: (response) => {
		//       console.log(response);

		//       this.lvdata = Object.values(response);
		//     },
		//     error: (error) => {
		//       console.log(error);
		//     }
		// });
	}

	highlightNode(nodeId: number, name: string): void {
		console.log("Highlight");
		console.log(name);
		// console.log(NodeNetworkComponent)
		if (name !== "folder") {
			NodeNetworkComponent.highlightNode(nodeId);
			// Hier wird das GUI geupdatet.
			console.log({"Search Name:": name});
			console.log({"in:": TREE_DATA});
			
			let obj = this.searchNodeInData(name);
			console.log({"Obj: ": obj});
			if(obj != null)
			this.dataService.setData(obj);
		}
	}

	searchNodeInData(name: string){
		for (let index = 0; index < TREE_DATA.length; index++) {
			const res = this.executeFind(TREE_DATA[index], name);
			if(res.found){
				return res.ResultNode;
			}
			
		}
		return {
			name: 'Self Study B',
			id: 5,
			fileType: 'folder',
			author: '',
			keywords: new Set<string>(["ML", "AI", "KI", "Test"]),
			children: []};
	}



	executeFind(node: ResultNode, name: string): search {
		let foundNode = this.findNode(node, name);
		console.log(foundNode);
		console.log(foundNode != null);
		if(foundNode != null) {
			console.log("AFSSAFBGADBLKGBALDKJGBADLKJADBG")
			return {found: true, ResultNode: foundNode};
		}
		return {found: false, ResultNode: foundNode}
	}

	findNode(root: ResultNode, targetTitle: string): ResultNode | null {
		var stack = [], node, ii;
		stack.push(root);
	
		while (stack.length > 0) {
			node = stack.pop();
			console.log(node.name);
			console.log(targetTitle);
			console.log(node.name == targetTitle);
			if (node.name == targetTitle) {
				// Found it!
				return node;
			} else if (node.children && node.children.length) {
				for (ii = 0; ii < node.children.length; ii += 1) {
					stack.push(node.children[ii]);
				}
			}
		}
	
		// Didn't find it. Return null.
		return null;
	}
	

}
