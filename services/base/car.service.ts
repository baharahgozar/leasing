import { ResourceService } from "../generics/resource.service";
import { HttpClient } from "@angular/common/http";
import { apiUrl, carServiceName,  } from "../../constants/server.constants";
import { Injectable } from "@angular/core";
import { GenericSerializer } from "../serializers/base/generic.serializer";
import { Car } from "src/app/models/base/car";


@Injectable({ providedIn: 'root' })
export class CarService extends ResourceService<Car> {
    constructor(httpClient: HttpClient) {
      super(
        httpClient,
        apiUrl ,
        carServiceName,
        new GenericSerializer<Car>());
    }
  }