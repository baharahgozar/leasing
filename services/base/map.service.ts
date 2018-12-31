import { ResourceService } from "../generics/resource.service";
import { Map } from '../../models/base/map';
import { HttpClient } from "@angular/common/http";
import { apiUrl, mapServiceName,  } from "../../constants/server.constants";
import { Injectable } from "@angular/core";
import { GenericSerializer } from "../serializers/base/generic.serializer";

@Injectable({ providedIn: 'root' })
export class MapService extends ResourceService<Map> {
    constructor(httpClient: HttpClient) {
      super(
        httpClient,
        apiUrl ,
        mapServiceName,
        new GenericSerializer<Map>());
    }
  }