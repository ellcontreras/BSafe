import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { GLOBAL } from './global';

@Injectable()
export class botService {
	//Tenemos una variable publica que es la direción de nuestro localhost den donde tenemos corriendo la api
	public url: string;

	//Metodo constructor del servici opara el usuario
	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	//Metodo para obtener usuarios por id
	preguntar(pregunta){
		let headers = new Headers({'Content-type':'application/json'});
		let params = JSON.stringify({pregunta: pregunta});

		return this._http.post(this.url+'bsafe', params, {headers: headers}).map(res => res.json());
	}
}
