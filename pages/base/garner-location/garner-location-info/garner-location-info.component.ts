import { GarnerLocation } from '../../../../models/base/garnerLocation';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GarnerLocationService } from '../../../../services/base/garner-location.service';
import { QueryOptions } from 'src/app/services/generics/query-options';
import { Province } from '../../../../models/base/province';
import { ProvinceService } from '../../../../services/base/province.service';

@Component({
  selector: 'app-garner-location-info',
  templateUrl: './garner-location-info.component.html',
  styleUrls: ['./garner-location-info.component.scss']
})
export class GarnerLocationInfoComponent implements OnInit {

model: GarnerLocation = new GarnerLocation();
  provinces: Province[];
  constructor(private provinceService: ProvinceService, private garnerLocationService: GarnerLocationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    var option = new QueryOptions();
    this.provinceService.list(option).subscribe(result => { this.provinces = result; });
    if (id) {
      this.getGarnerLocationInfo(id);
    }

  }
  getGarnerLocationInfo(id) {
    this.garnerLocationService.read(id).subscribe(result => this.model = result)

  }

  onSubmit() {
    if (this.model.id) {
      //edit
      this.garnerLocationService.update(this.model).subscribe(result => this.router.navigate(["/garnerLocation"]));
    }
    else {
      //add 
      this.garnerLocationService.create(this.model).subscribe(result => this.router.navigate(["/garnerLocation"]));
    }
  }
}