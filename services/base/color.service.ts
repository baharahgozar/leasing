import { ResourceService } from "../generics/resource.service";
import { HttpClient } from "@angular/common/http";
import { apiUrl, colorServiceName  } from "../../constants/server.constants";
import { Injectable } from "@angular/core";
import { GenericSerializer } from "../serializers/base/generic.serializer";
import { Color } from "src/app/models/base/color";

@Injectable({ providedIn: 'root' })
export class ColorService extends ResourceService<Color> {
    constructor(httpClient: HttpClient) {
      super(
        httpClient,
        apiUrl ,
        colorServiceName,
        new GenericSerializer<Color>());
    }
    
    AddColor(colorCode: string, colorName: string,RGB: string) {
      
  }
}