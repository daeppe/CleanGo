interface ServiceDetailProps {
  type?: string;
  bedroom?: string;
  bathroom?: string;
  hours: number;
}

export interface ServiceData {
  userId: number;
  date: string;
  price: number;
  serviceDetails: ServiceDetailProps;
  title: string;
  opened: boolean;
  completed: boolean;
  partnerId: number;
}
export interface AcceptService {
  partnerId: number;
  opened: boolean;
  serviceId: number;
}
