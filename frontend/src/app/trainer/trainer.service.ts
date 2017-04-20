import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TrainerService {
    private url:string = "http://localhost:5000/trainer/";
    constructor(private http: Http) { }

    getMyTrainings(name:string){
        return this.http.get(this.url+name)
            .map((response:Response) => response.json());
    } 

    search(searchText:any){
        let body = JSON.stringify(status);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'searchTrainings/',searchText)
            .map((response:Response) => response.json());
    }

    getTraining(id:number){
        console.log('id:'+id);
        return this.http.get(this.url+'trainings/'+id)
            .map((response:Response) => response.json());
    }
    
    addScenario(sc:any){
        let body = JSON.stringify(sc);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'addScenario/',sc)
            .map((response:Response) => response.json());
    }  
}