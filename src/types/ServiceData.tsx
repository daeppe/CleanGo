export interface ServiceData {
  userId: number;
  date: string;
  price: number;
  serviceDetails: {
    class: string;
    hours: number;
    type?: string;
    bedroom?: number;
    bathroom?: number;
  };
  opened: boolean;
  completed: boolean;
  partnerId: number;
}
export interface AcceptService {
  partnerId: number;
  opened: boolean;
  serviceId: number;
}
