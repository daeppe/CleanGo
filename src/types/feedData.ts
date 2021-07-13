export interface FeedData {
    userId: number;
    name: string;
    textPost: string;
    likes: Likes;
    date: number;
    id?: number;
  }

export interface Likes{
    amount: number;
    whoLikes?: Array<number>;
  }