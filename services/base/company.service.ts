import { ResourceService } from "../generics/resource.service";
import { Company } from '../../models/base/company';
import { HttpClient } from "@angular/common/http";
import { apiUrl, companyServiceName,  } from "../../constants/server.constants";
import { Injectable } from "@angular/core";
import { GenericSerializer } from "../serializers/base/generic.serializer";

@Injectable({ providedIn: 'root' })
export class CompanyService extends ResourceService<Company> {
    constructor(httpClient: HttpClient) {
      super(
        httpClient,
        apiUrl ,
        companyServiceName,
        new GenericSerializer<Company>());
    }
  }