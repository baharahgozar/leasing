import { Resource } from "../generics/Resource";
import { StaticInjector } from "@angular/core/src/di/injector";

export class Address extends Resource {
    CustomerID: number;
    AddressType: number;
    FullAddress: string;
    CityID:number;
    MainStreet:string;
    AuxStreet:string;
    Alley:string;
    BuildingNo :String;
    Floor : string;
    Unit: string;
    PostalCode: string;
    ZoneID:number;
    AccommodationStatus:number;
    IsDefault:boolean;
}
