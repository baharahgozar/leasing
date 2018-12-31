import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/base/city';
import { ProvinceService } from 'src/app/services/base/province.service';
import { Province } from 'src/app/models/base';
import { QueryOptions } from 'src/app/services/generics/query-options';
import { CityService } from 'src/app/services/base/city.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.scss']
})
export class CityInfoComponent implements OnInit {
  model: City = new City();
  editMode:boolean = false;
  provinces: Province[];
  constructor(
    private provinceService: ProvinceService, 
    private cityService: CityService,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService,
    private router: Router) { }

  ngOnInit() {
    this.ngxService.start();
    let id = this.route.snapshot.paramMap.get('id');
    var option = new QueryOptions();
    this.provinceService.list(option).subscribe(result => {
      this.provinces = result;
      if (id) {
        this.editMode = true;
        this.getCityInfo(id);
      } else{
        //add
        this.ngxService.stop();
      }
    });
  }

  getCityInfo(id) {
    this.cityService.read(id).subscribe(result =>
      {
         this.model = result
         this.ngxService.stop();
      });
  }


  onSubmit() {
    if(this.model.id){
      //edit
      this.cityService.update(this.model).subscribe(result => this.router.navigate(['/city']));
    } else{
      //add
      this.cityService.create(this.model).subscribe(result => this.router.navigate(['/city']));
    }
   
  }
}
