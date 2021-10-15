export interface ServiceData {
    customer_id: number;
    customer?: string;
    partner?: string;
    contractor?: string;
    date: string;
    price: number;
    service_details: {
        class: string;
        hours: number;
        type?: string;
        bedrooms?: number;
        bathrooms?: number;
    };
    opened: boolean;
    completed: boolean;
    partner_id: number;
    formatedPrice?: string;
    id?: number;
    address: {
        place: string;
        number: string;
        complements: string | undefined;
        cep: string;
        state: string;
        neighborhood: string;
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
        complements?: string;
        cep: string;
        state: string;
        neighborhood: string;
        city: string;
    };
}
export interface AcceptService {
    partner_id: number | undefined;
    opened: boolean;
    serviceId: number | undefined;
}
export interface AcceptServiceBE {
    partner_id: number | undefined;
    opened: boolean;
}
