import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  components:any;

  constructor(service: UserService){
    this.components = service.getUsers();
  }

}
