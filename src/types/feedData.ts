export interface FeedData {
  userId: number | undefined;
  full_name: string | undefined;
  textPost: string;
  date: number;
  id?: number;
}

export interface Likes {
  amount: number;
  people: Array<number>;
}
