import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from '../post-model';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { VoteService } from '../vote.service';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { PostService } from '../post.service';
import { ToastrService } from 'ngx-toastr';
import { VotePayload } from './vote-payload';
import { VoteType } from './vote-type';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})

export class VoteButtonComponent implements OnInit {

  @Input() post: PostModel;
  votePayLoad: VotePayload;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;
  isLoggedIn: boolean;


  constructor(private voteService: VoteService, private authService: AuthService,
    private postService: PostService, private toastr: ToastrService) {
    this.post = new PostModel();

    this.votePayLoad = {
      voteType: VoteType.DOWNVOTE,
      postId: 0
    }
    this.downvoteColor = '';
    this.upvoteColor = '';
    this.isLoggedIn = false;
  }

  upvotePost() {
    this.votePayLoad.voteType = VoteType.UPVOTE;
    this.vote();
    this.downvoteColor = '';
  }

  downvotePost() {
    this.votePayLoad.voteType = VoteType.DOWNVOTE;
    this.vote();
    this.upvoteColor = '';
  }

  private vote() {
    this.votePayLoad.postId = this.post.id;
    this.voteService.vote(this.votePayLoad).subscribe(() => {
      this.updateVoteDetails();
    }, error => {
      this.toastr.error(error.error.message);
      throwError(error);
    });
  }

  private updateVoteDetails() {
    this.postService.getPost(this.post.id).subscribe(post => {
      this.post = post;
    });
  }

  ngOnInit(): void {

  }
}
