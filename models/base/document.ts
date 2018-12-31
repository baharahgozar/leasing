import { Resource } from "../generics/Resource";

export class Document extends Resource {
    saleType: string;
    documentType: string;
    documentTitle: string;
    documentRelatedTo: string;
    active: boolean;
    tt: string;


}

