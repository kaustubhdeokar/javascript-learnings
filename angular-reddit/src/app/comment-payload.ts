export class CommentPayload{
    text: string;
    postId: number;
    userName?:string;

    constructor(){
        this.text = '',
        this.postId = 0
    }

}