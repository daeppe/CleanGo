export interface ServiceData {
    userId: number;
    contractor?: string;
    date: number;
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
    formatedPrice?: string;
    id?: number;
    address: {
        place: string;
        number: string;
        complement?: string;
        cep: string;
        uf: string;
        district: string;
        city: string;
    };
}
export interface ServiceDataBE {
    // userId: number;
    // contractor?: string;
    // partner_id: number;
    // id?: number;
    date: string;
    hours: number;
    bedrooms?: number;
    bathrooms?: number;
    opened: boolean;
    completed: boolean;
    residence?: string;
    value: number;
    service: string;
    address: {
        place: string;
        number: string;
        complement?: string;
        cep: string;
        uf: string;
        district: string;
        city: string;
    };
}
export interface AcceptService {
    partnerId: number | undefined;
    opened: boolean;
    serviceId: number | undefined;
}
