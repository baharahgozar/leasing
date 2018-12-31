import { ResourceService } from "../generics/resource.service";
import { HttpClient } from "@angular/common/http";
import { apiUrl, carAccessoryServiceName,  } from "../../constants/server.constants";
import { Injectable } from "@angular/core";
import { GenericSerializer } from "../serializers/base/generic.serializer";
import { CarAccessory } from "../../models/base/carAccessory";


@Injectable({ providedIn: 'root' })
export class CarAccessoryService extends ResourceService<CarAccessory> {
    constructor(httpClient: HttpClient) {
      super(
        httpClient,
        apiUrl ,
        carAccessoryServiceName,
        new GenericSerializer<CarAccessory>());
    }
  }

  