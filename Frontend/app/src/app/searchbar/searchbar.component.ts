import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl, NgForm } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, Observable, startWith } from 'rxjs';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormBuilder } from '@angular/forms';
import { Event } from '@angular/router';



@Component({
	selector: 'app-searchbar',
	templateUrl: './searchbar.component.html',
	styleUrls: ['./searchbar.component.css']
})


export class SearchbarComponent implements OnInit {

	separatorKeysCodes: number[] = [ENTER, COMMA];

	fruitCtrl = new FormControl('');

	showSearchBar: boolean = false
	addKeywordIsHidden: boolean = true;


	public keywordBox: string = '';

	search: String = "";

	nameModel: string = "";
	listOfKeywords: Set<string> = new Set<string>();




	constructor(private _formBuilder: FormBuilder) {

	}

	ngOnInit(): void {
	}


	toggleAddKeywordForm() {
		this.addKeywordIsHidden = !this.addKeywordIsHidden;

		let icon = document.getElementById('keywordaddbtnicon');
		if (icon != null)
			icon.innerHTML = this.addKeywordIsHidden ? 'add' : 'clear';
	}

	filterSet = [
		{
			id: 1,
			label: 'PDFs',
			isChecked: false
		},
		{
			id: 2,
			label: 'Codebeispiele',
			isChecked: false,
		},
		{
			id: 3,
			label: 'Foliensätze',
			isChecked: false
		}
		,
		{
			id: 4,
			label: 'Powerpoint',
			isChecked: false
		},
		{
			id: 5,
			label: 'Pythonskript',
			isChecked: false
		},
		{
			id: 6,
			label: 'Excel',
			isChecked: false
		},
		{
			id: 7,
			label: 'Word',
			isChecked: false
		},
		{
			id: 8,
			label: 'Selbstcheck',
			isChecked: false
		},
		{
			id: 9,
			label: 'Selbstcheck2',
			isChecked: false
		},
		{
			id: 10,
			label: 'Selbstcheck2',
			isChecked: false
		}
		,
		{
			id: 11,
			label: 'Selbstcheck2',
			isChecked: false
		}
		,
		{
			id: 12,
			label: 'Selbstcheck2',
			isChecked: false
		},
		{
			id: 13,
			label: 'Selbstcheck2',
			isChecked: false
		},

	]

	// used to group filters in expansion panel
	trackByFn(index: number, item: any) {
		return index;
	}

	// used to determine rows, number limits items per row
	getRows(arr: any[], n: number) {
		return arr.map((item, i) => {
			return i % n === 0 ? arr.slice(i, i + n) : null;
		}).filter(item => item);
	}
	// apply to our filterSet to group them
	filterSet2 = this.getRows(this.filterSet, 10);

	onChangeFilter($event) {
		const name = $event.target.value;
		const isChecked = $event.target.checked;


		this.filterSet = this.filterSet.map((item) => {
			if (item.label === name) {
				item.isChecked = isChecked;
				return item;
			}
			return item;
		});

		console.log(this.filterSet);
	}


	filters = this._formBuilder.group({
		pdfs: false,
		foliensaetze: false,
		codeexample: false,
	});









	onSubmit() {
		this.listOfKeywords.add(this.nameModel);
		console.log(this.listOfKeywords);
		this.nameModel = '';

	}



	add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();


		if (value) {
			console.log(value);
			this.listOfKeywords.add(value);
		}

		// Clear the input value
		event.chipInput!.clear();
	}



	remove(keyword: string): void {

		if (this.listOfKeywords.size > 0) {
			this.listOfKeywords.delete(keyword);
		}
		console.log(this.listOfKeywords);
	}




}
