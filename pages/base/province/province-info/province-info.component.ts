import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { QueryOptions } from 'src/app/services/generics/query-options';
import { Province } from '../../../../models/base/province';
import { ProvinceService } from '../../../../services/base/province.service';




@Component({
  selector: 'app-province-info',
  templateUrl: './province-info.component.html',
  styleUrls: ['./province-info.component.scss']
})
export class ProvinceInfoComponent implements OnInit {

model: Province = new Province();
  provinces: Province[];
  constructor(private provinceService: ProvinceService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    var option = new QueryOptions();
    this.provinceService.list(option).subscribe(result => { this.provinces = result; });
    if (id) {
      this.getProvincelocationInfo(id);
    }

  }
  getProvincelocationInfo(id) {
    this.provinceService.read(id).subscribe(result => this.model = result)

  }

  onSubmit() {
    if (this.model.id) {
      //edit
      this.provinceService.update(this.model).subscribe(result => this.router.navigate(["/province"]));
    }
    else {
      //add 
      this.provinceService.create(this.model).subscribe(result => this.router.navigate(["/province"]));
    }
  }
}