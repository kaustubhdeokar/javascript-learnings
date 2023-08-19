import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostserviceService } from '../postservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

   
  posts:any;
  
  constructor(service:PostserviceService, private http: HttpClient) {

      let response = service.getPosts();
      response.subscribe((data)=>this.posts = data);
  }

}
