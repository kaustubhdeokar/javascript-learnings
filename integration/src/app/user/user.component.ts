import { Component, OnInit } from '@angular/core';
import { User } from './user'
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;

  constructor(private service: UserService, private http:HttpClient) {
  }

  ngOnInit(): void {
    let response = this.http.get("https://jsonplaceholder.typicode.com/users");
    response.subscribe((data)=>this.users=data);
  }

}
