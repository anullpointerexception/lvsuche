import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { Course } from './DataTypes/course';
import { Lesson } from './DataTypes/lesson';
import { Lvdata } from './lvdata';
@Injectable({
	providedIn: 'root'
})
export class RestService {

	private URL = '../../assets/LV_Index_sampleData.json';

	Data: Course[] = [
		{
			Name: "Machinelearning",
			Lessons: [
				new Lesson(
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
				new Lesson(
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
				new Lesson(
					"Class 1", 
					["ML", "AI", "KI"], 
					[]
				)
			],
		},
		{
			Name: "Einführung in die AI",
			Lessons: [
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
				new Lesson(
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
			],
		},
	] 

	constructor(private http: HttpClient) {
	}

	getConstDummyData() {
		return this.Data;
	}

	getDummyData() {
		console.log('getDummyData()');
		return this.http.get<Lvdata[]>(this.URL);
	}
}
