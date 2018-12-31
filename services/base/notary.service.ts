import { ResourceService } from "../generics/resource.service";
import { HttpClient } from "@angular/common/http";
import { apiUrl, notaryServiceName,  } from "../../constants/server.constants";
import { Injectable } from "@angular/core";
import { Notary } from "../../models/base/notary";
import { GenericSerializer } from "../serializers/base/generic.serializer";

@Injectable({ providedIn: 'root' })
export class NotaryService extends ResourceService<Notary> {
    constructor(httpClient: HttpClient) {
      super(
        httpClient,
        apiUrl ,
        notaryServiceName,
        new GenericSerializer());
    }
  }