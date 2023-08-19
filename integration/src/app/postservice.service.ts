import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {


  getPosts(){
    return this.http.get("http://localhost:8080/api/posts/all");
  }

  constructor(private http: HttpClient)  { 
    
  }
}
