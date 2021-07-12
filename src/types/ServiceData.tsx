export interface ServiceData {
  userId: number;
  date: number;
  price: number;
  serviceDetails: {
    class: string;
    hours: number;
    type?: string;
    bedroom?: number;
    bathroom?: number;
  };
  adress?: string;
  opened: boolean;
  completed: boolean;
  partnerId: number;
  formatedPrice?: string;
  id?: number;
}
export interface AcceptService {
  partnerId: number | undefined;
  opened: boolean;
  serviceId: number | undefined;
}
