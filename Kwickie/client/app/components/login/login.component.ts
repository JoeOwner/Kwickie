import { Component } from '@angular/core';
import { KwickieService } from '../../services/kwickie.service';
import { User } from '../../../model/User';
import { KwickieFeed } from '../../../model/KwickieFeed';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html'
})
export class LoginComponent {
	error;
	loading = false;
	localUser = {
		firstName: "",
		lastName: "",
		email: "",
		password: ""
	}
	loggedInUser : User;
	feeds : KwickieFeed[];

	constructor( private kwickieService:KwickieService){
		
	};

	registerUser(){
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
		this.kwickieService.registerUser(usr).subscribe(user => {
			this.loginUser();
		},
		err => {
			this.loading = false;
			console.log(err);
			if(err.status === 422)
				this.error={
					text:"Email Address already exists"
				};
			else
				this.error={
					text:"There was an error Registering the User"
				};
		});


	}
	loginUser(){
		var usr = this.localUser;

		this.kwickieService.loginUser({ "email": this.localUser.email, "password": this.localUser.password }).subscribe(user => {
			this.loggedInUser = user;
			this.getFeed();
		},
		err => {
			this.loading = false;
			this.error={
				text:"There was an error logging in"
			};
		});


	}

	getFeed(){
		this.kwickieService.getFeed(this.loggedInUser.id).subscribe(feed => {
			this.feeds = feed;
			this.loading = false;
		},
		err => {
			this.loading = false;
			this.error={
				text:"There was an error getting the feed"
			};
		});


	}
 }
