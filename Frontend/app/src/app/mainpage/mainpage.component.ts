import { Component, OnInit } from '@angular/core';

export interface Tile {
	color: string;
	cols: number;
	rows: number;
	text: string;
}

@Component({
	selector: 'app-mainpage',
	templateUrl: './mainpage.component.html',
	styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	tiles: Tile[] = [
		{ text: 'resultTable', cols: 3, rows: 2, color: 'lightblue' },
		{ text: 'resultDetail', cols: 1, rows: 2, color: 'lightgreen' }
	];

}
