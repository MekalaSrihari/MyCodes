import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class ProfileService{

    constructor(private _http:Http){

    }

    public saveProfile(){
        let _url: string = 'https://reqres.in/api/users';
        return this._http.post(_url, {name:'Hari',job:'IT',city:'Bangalore'}).map((res:Response)=>res.json())
        .catch(this._errorHandler);
    }

    private _errorHandler(error:Response){
        console.log('Error Occurred::'+error);
        return Observable.throw(error || 'Some Error on Server');
    }

}