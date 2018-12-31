import { CarAccessoryService } from 'src/app/services/base/carAccessory.service';
import { Component, OnInit } from '@angular/core';
import { QueryOptions } from 'src/app/services/generics/query-options';



@Component({
  selector: 'app-carAccessory-list',
  templateUrl: './carAccessory-list.component.html',
  styleUrls: ['./carAccessory-list.component.scss']
})
export class CarAccessoryListComponent implements OnInit {

  constructor(private service: CarAccessoryService) {

  }

  ngOnInit() {
    var option = new QueryOptions();
    this.service.list(option).subscribe(result => {
      this.rowData = result;
    });
  }

  columnDefs = [
    { headerName: 'کد وسیله جانبی خودرو ', field: 'AccessoryCode', width: 100},
    { headerName: 'قیمت وسیله جانبی  ', field: 'AccessoryPrice',width: 200 },
    { headerName: 'کد خودرو ', field: 'carRef',width: 200 },
    { headerName: 'فعال ', field: 'active',width: 100 },
    { headerName: ' کد انبار ', field: 'GarnerRef',width: 100 },
    { headerName: 'تعداد وسیله جانبی ', field: 'AccessoryCount',width: 100 },
    {
      headerName: 'عملیات', field: 'manage',width: 300,autoHeight: true, cellRenderer: function (params) {
        return `<div class="btn-group"><button type="button" class="btn btn-sm btn-outline-primary waves-effect">لیست لوازم جانبی  </button>
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
