import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { NodeNetworkComponent } from '../visualization/node-network/node-network.component';
import { BehaviorSubject, Subject } from 'rxjs';
import { ResultDataService } from '../resultdataservice';
import { RestService } from '../service/rest.service';
import { Course } from '../service/DataTypes/course';

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


@Component({
    selector: 'app-result-details',
    templateUrl: './result-details.component.html',
    styleUrls: ['./result-details.component.css'],
})
export class ResultDetailsComponent implements OnInit {

    constructor(private restService: RestService, private dataService: ResultDataService) {

    }

    SelectedItem: ResultNode = /*dummy data*/
	{
		name: 'Machinelearning',
		id: 1,
		fileType: 'folder',
		author: '',
		keywords: new Set<string>(["ML", "AI", "KI"]),
		children: []
	}

    ngOnInit(): void {
        // die Variable wird SelectedItem updatet sich, sobald ein anderes Node ausgewählt wird. 
        this.dataService.getData().subscribe(data => {
            console.log({"Data: ": data});
            this.SelectedItem = data;
            console.log({"Selected: ": this.SelectedItem.name});
        });
    }

    selectOtherKeywordList(){
        
    }

    wordCloud: boolean = false;
    separatorKeysCodes: number[] = [ENTER, COMMA];

    fruitCtrl = new FormControl('');

    public keywordBox: string = '';

    nameModel: string = '';
    listOfKeywords: Set<string> = new Set<string>([
        'ML',
        'MachineLearning',
        'Hallo',
    ]); // array mit request befüllen

    addKeywordIsHidden: boolean = true;
    isEditKeywordHidden: boolean = true;

    onSubmit() {
        this.SelectedItem.keywords.add(this.nameModel);
        console.log(this.SelectedItem.keywords);
        this.nameModel = '';
        //this.SelectedItem.keywords.push()
        //this.dataService.setData(this.SelectedItem);

    }

    search: String = '';

    toggleEditKeyword() {
        this.isEditKeywordHidden = false;
    }

    editKeyword(event: MatChipInputEvent, keyword: string): void {
        const value = (event.value || '').trim();

        if (value) {
            console.log(value);
            this.SelectedItem.keywords.delete(keyword);
            this.SelectedItem.keywords.add(value);
            this.isEditKeywordHidden = true;
        }

        // Clear the input value
        event.chipInput!.clear();
    }

    toggleAddKeywordForm() {
        this.addKeywordIsHidden = !this.addKeywordIsHidden;

        let icon = document.getElementById('keywordaddbtnicon');
        if (icon != null)
            icon.innerHTML = this.addKeywordIsHidden ? 'add' : 'clear';
    }

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        if (value) {
            console.log(value);
            this.SelectedItem.keywords.add(value);
        }

        // Clear the input value
        event.chipInput!.clear();
    }

    remove(keyword: string): void {
        if (this.SelectedItem.keywords.size > 0) {
            this.SelectedItem.keywords.delete(keyword);
        }
        console.log(this.SelectedItem.keywords);
    }





}
