export class SubredditModel {
    id?: number;
    name: string;
    description: string;
    numberOfPosts?: number;

    constructor() {
        this.name = '';
        this.description = '';
    }
}