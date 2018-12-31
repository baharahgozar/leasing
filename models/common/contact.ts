import { Resource } from "../generics/Resource";
import { StaticInjector } from "@angular/core/src/di/injector";

export class Contact extends Resource {
    SourceID: number;
    ContactType: number;
    ContactRelation: number;
    TelNumber:string;
    CityID:number;
    IsDefault:Boolean;
    SourceType:number;
}
