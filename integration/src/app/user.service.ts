import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(){
    return [
      {
        "id": 1,
        "name": "sample",
        "email": "sample@email.com",
        "mobile": 100
      },
      {
        "id": 2,
        "name": "sample2",
        "email": "sample2@email.com",
        "mobile": 101
      },
      {
        "id": 3,
        "name": "sample3",
        "email": "sample3@email.com",
        "mobile": 102
      }
    ];
  }

  constructor() { }
}
