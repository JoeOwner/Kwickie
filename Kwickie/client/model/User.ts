export class User{
	id: string;
	ttl:  number;
 	created:  string;
 	userId: string;
 	user: any;

 	getToken(){
 		return this.id;
 	}
}