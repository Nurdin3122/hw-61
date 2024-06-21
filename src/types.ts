export interface Country {
    name:string;
    alpha3Code:string;
}

export interface APICountry {
    name:string;
    alpha3Code:string;
}

export interface APIInfoCountry {
    name:string;
    alpha3Code:string;
    capital:string;
    borders:string[];
    population:string;
    flag:string;
}