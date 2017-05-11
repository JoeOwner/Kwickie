import { Component } from '@angular/core';
import { KwickieService } from '../../services/kwickie.service';
import { Kwickie } from '../../../model/Kwickie';

@Component({
	moduleId: module.id,
	selector: 'kwickies',
	templateUrl: 'kwickies.component.html'
})
export class KwickiesComponent {
	kwickies : Kwickie[];
	name: string;
	icon: string;
	id: string;
	description: string;

	

	constructor( private kwickieService:KwickieService){
		this.kwickieService.getKwickies().subscribe(kwickies => {
			this.kwickies = kwickies;
		});
	}

	addKwickie(event){
		event.preventDefault();
		var newKwickie = {
			name : this.name,
			icon : this.icon,
			id : this.id,
			description : this.description,

		}
		this.kwickieService.addKwickie(newKwickie)
			.subscribe(kwickie => {
				this.kwickies.push(kwickie);
				this.name = '';
				this.icon = '';
				this.id = '';
				this.description = '';
			});
	}
	deleteKwickie(id){
		var kwickies = this.kwickies;

		this.kwickieService.deleteKwickie(id)
			.subscribe(data => {
				if(data.n == 1){
					for(var i = 0; i < kwickies.length; i++){
						if(kwickies[i]._id == id){
							kwickies.splice(i,1);
						}
					}
				}
			});
	}
	updateStatus(kwickie){
		var _kwickie = {
			_id : kwickie._id,
			name : this.name,
			icon : this.icon,
			id : this.id,
			description : this.description,

		}
		this.kwickieService.updateKwickie(_kwickie).subscribe(data => {
		});
	}
 }
