import { ResourceService } from "../generics/resource.service";
import { HttpClient } from "@angular/common/http";
import { apiUrl, cityServiceName, } from "../../constants/server.constants";
import { Injectable } from "@angular/core";
import { GenericSerializer } from "../serializers/base/generic.serializer";
import { City } from "../../models/base/city";


@Injectable({ providedIn: 'root' })
export class CityService extends ResourceService<City> {
    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            apiUrl,
            cityServiceName,
            new GenericSerializer<City>());
    }
}