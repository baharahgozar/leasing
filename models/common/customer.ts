import { Resource } from "../generics/Resource";
import { StaticInjector } from "@angular/core/src/di/injector";

export class Customer extends Resource {
    IsPerson: number;
    Gender: number;
    Marital: number;
    FName:string;
    LName:string;
    FatherName:string;
    IdNum:string;
    IdSerNo :String;
    IdserialNo : string;
    NationalCode: string;
    BirthDate: number;
    ExportationDate:number;
    RegPlaceRef:number;
    BourseCode:number;
    Password:string ;
    Active:number;
    EducationType :number;
    PersCode :string;
    CoCode: string;
    Email:string;
    TavoniSahamNO:string;
}
