import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SubredditSideBarComponent } from './shared/subreddit-side-bar/subreddit-side-bar.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';
import { ListSubredditsComponent } from './subreddit/list-subreddits/list-subreddits.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: SignupComponent, path: 'sign-up' },
  { component: UserProfileComponent, path: 'user-profile/:name'},
  { component: LoginComponent, path: 'login' },
  { component: CreatePostComponent, path: 'create-post'},
  { component: CreateSubredditComponent, path: 'create-subreddit'},
  { component: ListSubredditsComponent, path: 'list-subreddits' },
  { component: ViewPostComponent, path: 'view-post/:id' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
