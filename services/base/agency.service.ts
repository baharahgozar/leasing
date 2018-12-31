import { ResourceService } from "../generics/resource.service";
import { HttpClient } from "@angular/common/http";
import { apiUrl, agencyServiceName,  } from "../../constants/server.constants";
import { Injectable } from "@angular/core";
import { GenericSerializer } from "../serializers/base/generic.serializer";
import { Agency } from "../../models/base/agency";


@Injectable({ providedIn: 'root' })
export class AgencyService extends ResourceService<Agency> {
    constructor(httpClient: HttpClient) {
      super(
        httpClient,
        apiUrl ,
        agencyServiceName,
        new GenericSerializer<Agency>());
    }
  }