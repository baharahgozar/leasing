import { garnerlocationServiceName } from './../../constants/server.constants';
import { GarnerLocation } from './../../models/base/garnerLocation';
import { ResourceService } from "../generics/resource.service";
import { HttpClient } from "@angular/common/http";
import { apiUrl } from "../../constants/server.constants";
import { Injectable } from "@angular/core";
import { GenericSerializer } from "../serializers/base/generic.serializer";

@Injectable({ providedIn: 'root' })
export class GarnerLocationService extends ResourceService<GarnerLocation> {
    constructor(httpClient: HttpClient) {
      super(
        httpClient,
        apiUrl ,
        garnerlocationServiceName,
        new GenericSerializer<GarnerLocation>());
    }
  }