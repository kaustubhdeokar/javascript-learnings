import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubredditModel } from './subreddit-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  constructor(private httpclient: HttpClient) {
  }

  getAllSubreddits(): Observable<Array<SubredditModel>> {
    return this.httpclient.get<Array<SubredditModel>>("http://localhost:8080/api/subreddit/all");
  }

  createSubreddit(subredditModel: SubredditModel): Observable<SubredditModel> {
    return this.httpclient.post<SubredditModel>("http://localhost:8080/api/subreddit",
      subredditModel);
  }

}
