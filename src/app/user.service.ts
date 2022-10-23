import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { observable } from 'rxjs'

@Injectable({ providedIn: 'root'})
export class UserService{
    constructor(private http: HttpClient){}

    get(username: string){
        return this.http.get<{disponivel: boolean}>(
            `http://localhost:3000/?username=${username}`
        );
    }
}