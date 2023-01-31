import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	label: string = "";
	route: string = "";
	username: string = "default";

	menuType: String = 'default';

	public linkerObservable = new Subject<boolean>();

	constructor(private router: Router) {

	}



	ngOnInit(): void {
		this.router.events.subscribe((val: any) => {
			if (val.url) {
				if (localStorage.getItem('authenticated')) {
					this.username = (localStorage.getItem('username') || '{}');
					this.menuType = "authenticated";
				} else {
					this.menuType = "default";
				}
			}

		})
	}

	get getLocalStorageInfo() {
		return localStorage.getItem('authenticated')
	}



}
