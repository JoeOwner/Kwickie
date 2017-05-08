import { Component } from '@angular/core';
import { KwickieService } from '../../services/kwickie.service';
import { User } from '../../../model/User';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html'
})
export class LoginComponent {
	loggedInUser: boolean = false;
	error;
	loading = false;
	localUser = {
		firstName: "",
		lastName: "",
		email: "",
		password: ""
	}

	constructor( private kwickieService:KwickieService){
		
	};

	loginUser(){
		var usr = this.localUser;
		this.loading = true;

		if(!usr.firstName || !usr.lastName || !usr.email || !usr.password )
		{
			this.error={
				text:"Please fill in all inputs"
			}
			this.loading = false;
			return;
		}
		this.kwickieService.loginUser(usr).map(res => res.json()).subscribe(user => {
			this.localUser = user;
			this.loading = false;
		},
		err => {
		console.log('hi');
			this.loading = false;
			this.error={
				text:"There was an error logging in"
			};
		});


	}
	
 }
