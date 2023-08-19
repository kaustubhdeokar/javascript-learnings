import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyComponentComponent } from 'src/app/my-component/my-component.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component'

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    UserComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
