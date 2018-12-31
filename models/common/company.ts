import { Resource } from "../generics/Resource";
import { StaticInjector } from "@angular/core/src/di/injector";

export class Company extends Resource {
    CoName: string;
    CoTypeID: number;
    ActivityType: string;
    RegistrationNo:string;
    RegistrationDate:number;
    NationalID:string;
    EconomicCode:string;
    ManagerName :String;
    EnvoyName : string;
    EnvoyPosition: string;
    WebSite: string;
    Email:string;
    BourseCode:string;
}
