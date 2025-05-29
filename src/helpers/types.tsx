export interface AirlineLuggage {
    airline: Airline;
    cabinSmallLuggage: Luggage;
    cabinLargeLuggage: Luggage;
    checkedSmallLuggage?: Luggage;
    checkedLargeLuggage: Luggage;
    checkedExtraLargeLuggage?: Luggage;
}

export interface Luggage {
    large?: number;
    medium?: number;
    small?: number;
    sizeTotal?: number;
    weight?: number;
}

export interface Airline {
    name: string;
    code: string;
}

export interface SqlAirline {
    name: string;
    code: string;
}

export interface SqlType {
    id: number;
    name: string;
}

export interface SqlLuggage {
    id: number;
    small?: number;
    medium?: number;
    large?: number;
    type: number;
    airline: string;
    weight?: number;
    sizeTotal?: number;
}
