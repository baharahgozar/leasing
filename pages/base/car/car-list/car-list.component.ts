import { Component, OnInit } from '@angular/core';
import { QueryOptions } from 'src/app/services/generics/query-options';
import { CarService } from 'src/app/services/base/car.service';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  constructor(private service: CarService) {

  }

  ngOnInit() {
    var option = new QueryOptions();
    this.service.list(option).subscribe(result => {
      this.rowData = result;
    });
  }

  columnDefs = [
    { headerName: 'کد خودرو ', field: 'carCode', width: 100},
    { headerName: 'نام خودرو ', field: 'carName',width: 100 },
    { headerName: 'مدل خودرو ', field: 'carModle',width: 300 },
    { headerName: 'رنگ پیش فرض ', field: 'defaultColor',width: 100 },
    { headerName: 'فعال ', field: 'active',width: 100 },
    { headerName: 'نوع تهسیلات ', field: 'loanType',width: 100 },
    { headerName: 'ظرفیت ', field: 'capacity',width: 100 },
    { headerName: 'واحد ظرفیت ', field: 'capacityUnit',width: 100 },
    { headerName: 'تعداد ماه مانده به شروع اقساط ', field: 'monthesToStart',width: 100 },
    { headerName: 'آدرس تصویر ', field: 'imageAddress',width: 100 },
    { headerName: 'تخصیص مکانیزه ', field: 'mechanizedAllocation',width: 100 },
    { headerName: 'تعداد روز مانده به شروع اقساط ', field: 'daysToStart',width: 100 },
    { headerName: 'تخفیف ', field: 'discount',width: 100 },
    {
      headerName: 'عملیات', field: 'manage',width: 300,autoHeight: true, cellRenderer: function (params) {
        return `<div class="btn-group"><button type="button" class="btn btn-sm btn-outline-primary waves-effect">لیست خودرو ها</button>
        <button type="button" class="btn btn-sm btn-outline-warning waves-effect"><i class="fa fa-edit"></i></button>
        <button type="button"  (click)="dataModal.show()" class="btn btn-sm btn-outline-danger waves-effect" alt="حذف"><i class="fa fa-remove"></i></button></div>`
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
