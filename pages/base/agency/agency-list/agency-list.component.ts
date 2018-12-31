import { Component, OnInit } from '@angular/core';
import { QueryOptions } from 'src/app/services/generics/query-options';
import { AgencyService } from 'src/app/services/base/agency.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})
export class AgencyListComponent implements OnInit {

  constructor(private service: AgencyService,private router: Router) {

  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  ngOnInit() {
    var option = new QueryOptions();
    this.service.list(option).subscribe(result => {
      this.rowData = result;
    });
  }

  columnDefs = [
    { headerName: 'کد نمایندگی ', field: 'agencyCode', width: 150},
    { headerName: 'نام صاحب ', field: 'ownerName',width: 200 },
    { headerName: 'نام کارگزار', field: 'brokerName',width: 200 },
    { headerName: 'آدرس', field: 'address',width: 400 },

    {
      headerName: 'عملیات', field: 'manage',width: 600,autoHeight: true, cellRenderer: function (params) {
        return `<button type="button" class="btn btn-md btn-unique waves-effect">لیست نگاشت ها </button>
        <button type="button" class="btn btn-md btn-deep-purple waves-effect">لیست پارکینگ ها </button>
        <button type="button" class="btn btn-md btn-indigo waves-effect">لیست  خدمات </button>
        <button type="button" class="btn btn-md btn-cyan waves-effect">
            <i class="fa fa-edit"></i>
          </button>
          <button type="button"  (click)="dataModal.show()" class="btn btn-md btn-deep-orange waves-effect" alt="حذف">
            <i class="fa fa-trash-o"></i>
          </button>`;
      }
    },
  ];

  rowData: any;


  editRow(event) {
    console.log(event);
    alert('edit');
  }

  removeRow(event){
    alert('remove');
  }

}
