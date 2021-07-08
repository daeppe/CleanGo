export interface UserData {
  class: string;
  fullName: string;
  email: string;
  password: string;
  cpf: string;
  address: string;
  city: string;
  feedback: Array<string>[];
  favorit: Array<string>[];
}

export interface FeedData {
  userId: number;
  likesFeed: number;
  bodyFeed: string;
  dataFeed: string;
}
