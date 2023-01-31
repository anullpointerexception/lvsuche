import { S } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

	message: string = "";

	constructor(private router: Router) { }

	ngOnInit(): void {
		this.handleLogout();
		console.log("Logout successful!");
		this.message = "Logout successful!";
		this.router.navigate(['login']);
	}

	handleLogout() {
		localStorage.clear();

	}

}
