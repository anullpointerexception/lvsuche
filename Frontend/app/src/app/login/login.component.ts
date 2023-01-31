import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../service/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	email = new FormControl('', [Validators.required, Validators.email]);
	password = new FormControl('', [Validators.required]);
	hide = true;
	isLoading = false;
	constructor(private router: Router, private authService: AuthService) { }

	ngOnInit(): void {
		console.log(localStorage.getItem("authenticated"));
		if (localStorage.getItem('authenticated') == "true") {
			this.router.navigate(['/mainpage']);
		}
	}



	bool = true;

	login() {
		if (this.authService.login(this.email.value, this.password.value)) {
			console.log('login successful');
			this.router.navigate(['/mainpage']);
		}
		else if (this.email.hasError('required') || this.password.hasError('required')) {
			window.alert('Bitte alle Pflichtfelder ausfüllen!');
		}
		else {
			window.alert('Login failed!');
		}

	}

}
