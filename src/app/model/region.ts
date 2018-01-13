
import { Country } from "./country";
import { Regency } from "./regency";

export class Region{
    id:number;
    name:string;
    countryId:number;
    country: Country;
    regency: Regency[];
}