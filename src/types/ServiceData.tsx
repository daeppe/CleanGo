export interface ServiceData {
  userId: number;
  date: string;
  price: number;
  serviceDetails: {};
  details: string;
  opened: boolean;
  completed: boolean;
  partnerId: number;
}
export interface AcceptService {
  partnerId: number;
  opened: boolean;
  serviceId: number;
}
