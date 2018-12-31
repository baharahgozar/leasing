import { ResourceService } from "../generics/resource.service";
import { HttpClient } from "@angular/common/http";
import { apiUrl, documentServiceName,  } from "../../constants/server.constants";
import { Injectable } from "@angular/core";
import { GenericSerializer } from "../serializers/base/generic.serializer";
import { Document } from '../../models/base/document';


@Injectable({ providedIn: 'root' })
export class DocumentService extends ResourceService<Document> {
    constructor(httpClient: HttpClient) {
      super(
        httpClient,
        apiUrl ,
        documentServiceName,
        new GenericSerializer<Document>());
    }
  }