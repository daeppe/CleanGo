export interface UserData {
    partner?: boolean;
    full_name: string;
    email: string;
    password?: string;
    cpf: string;
    address: string;
    cep: string;
    uf: string;
    district: string;
    complement?: string;
    gender: string;
    birthday: number;
    phone: string;
    city: string;
    services: Array<string>[];
    id?: number;
    is_partner?: boolean;
}

export interface PartnerData {
    partner?: boolean;
    full_name?: string;
    email?: string;
    password?: string;
    cpf?: string;
    address?: string;
    cep?: string;
    uf?: string;
    district?: string;
    number?: string;
    complement?: string;
    gender?: string;
    birthday?: number;
    phone?: string;
    city?: string;
    about?: string;
    service?: string;
    id?: number;
    is_partner?: boolean;
}

export interface FeedData {
    userId: number;
    likesFeed: number;
    bodyFeed: string;
    dataFeed: string;
}
