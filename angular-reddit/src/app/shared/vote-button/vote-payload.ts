import { VoteType } from "./vote-type";

export class VotePayload {
    voteType: VoteType;
    postId: number;

    constructor(){
        this.voteType = VoteType.DOWNVOTE;
        this.postId = 0;
    }
}