import { QueryOptions } from 'src/app/services/generics/query-options';
import { Province } from '../../../../models/base/province';
import { ProvinceService } from '../../../../services/base/province.service';
import { Notary } from '../../../../models/base/notary';
import { NotaryService } from '../../../../services/base/notary.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-notary-info',
  templateUrl: './notary-info.component.html',
  styleUrls: ['./notary-info.component.scss']
})
export class NotaryInfoComponent implements OnInit {

  model: Notary = new Notary();
  provinces: Province[];
  constructor(private provinceService: ProvinceService, private notaryService: NotaryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    var option = new QueryOptions();
    this.provinceService.list(option).subscribe(result => { this.provinces = result; });
    if (id) {
      this.getCityInfo(id);
    }

  }
  getCityInfo(id) {
    this.notaryService.read(id).subscribe(result => this.model = result)

  }

  onSubmit() {
    if (this.model.id) {
      //edit
      this.notaryService.update(this.model).subscribe(result => this.router.navigate(["/notery"]));
    }
    else {
      //add 
      this.notaryService.create(this.model).subscribe(result => this.router.navigate(["/notery"]));
    }
    // else{
    //   //delete
    //   this.noteryService.delete(this.model).subscribe(result => this.router.navigate(["/notery"]));
    // }
  }
};

