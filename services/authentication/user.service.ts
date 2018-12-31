import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../../models/base/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    apiUrl = 'http://130.185.72.105:2525/api/';

    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users/getall`);
    }

    getById(id: number) {
        return this.http.get<User>(`${this.apiUrl}/users/getById/${id}`);
    }

    addUser() {
         this.http.post<any>(`${this.apiUrl}/users`, { userName:'aaa', firstName:'bbbb' })
        .pipe(map(user => {
           
        }));
    }
}