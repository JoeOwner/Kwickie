import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class KwickieService{
	isLoggedIn : boolean = false;

	constructor(private http:Http){
		console.log('kwickie service initalized...');
	}

	loginUser(loginCreds){
		console.log(loginCreds);
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/rego', JSON.stringify(loginCreds), {headers: headers}).map(res => res.json());
	}

	getKwickies(){
		return this.http.get('/api/tasks').map(res => res.json())
	}

	addKwickie(newKwickie){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/task', JSON.stringify(newKwickie), {headers: headers}).map(res => res.json());
	}

	deleteKwickie(id){
		return this.http.delete('/api/task/' + id).map(res => res.json())
	}

	updateKwickie(kwickie){
		var headers = new Headers();

		headers.append('Content-Type', 'application/json');
		return this.http.put('/api/task/' + kwickie._id, JSON.stringify(kwickie), {headers: headers}).map(res => res.json());
	}
}