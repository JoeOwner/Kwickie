import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class KwickieService{
	constructor(private http:Http){
		console.log('kwickie service initalized...');
	}

	registerUser(loginCreds){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('https://bigdev.kwickie.com/api/Members', JSON.stringify(loginCreds), {headers: headers}).map(res => res.json());
	}

	loginUser(loginCreds){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('https://bigdev.kwickie.com/api/Members/login', JSON.stringify(loginCreds), {headers: headers}).map(res => res.json());
	}

	getFeed(token){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.get('https://bigdev.kwickie.com/api/Members/me/kwickie/feed?includeQuestions=false&excludeAssociatedKwickies=false&offset=0&limit=25&access_token=' + token, {headers: headers}).map(res => res.json());
	}

	getKwickies(){
		return this.http.get('/api/Categories').map(res => res.json())
	}

	addKwickie(newKwickie){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/Categorie', JSON.stringify(newKwickie), {headers: headers}).map(res => res.json());
	}

	deleteKwickie(id){
		return this.http.delete('/api/Categorie/' + id).map(res => res.json())
	}

	updateKwickie(kwickie){
		var headers = new Headers();

		headers.append('Content-Type', 'application/json');
		return this.http.put('/api/Categorie/' + kwickie._id, JSON.stringify(kwickie), {headers: headers}).map(res => res.json());
	}
}