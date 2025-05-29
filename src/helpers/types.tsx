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
