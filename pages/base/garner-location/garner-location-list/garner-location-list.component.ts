import { Component, OnInit } from '@angular/core';
import { GarnerLocationService } from 'src/app/services/base/garner-location.service';
import { QueryOptions } from 'src/app/services/generics/query-options';

@Component({
  selector: 'app-garner-location-list',
  templateUrl: './garner-location-list.component.html',
  styleUrls: ['./garner-location-list.component.scss']
})
export class GarnerLocationListComponent implements OnInit {

  constructor(private service: GarnerLocationService) {

  }

  ngOnInit() {
    var option = new QueryOptions();
    this.service.list(option).subscribe(result => {
      this.rowData = result;
    });
  }

  gridOptions = {
    getRowStyle: function (params) {
      if (params.node.rowIndex % 2 === 0) {
        return { background: '#ddd' }
      }
    }
  }
  columnDefs = [
    { headerName: 'نام رنگ', field: 'garnerName',width: 300 },
    { headerName: 'آدرس انبار ', field: 'garnerAddress',width: 300 },
    { headerName: 'تلفن انبار', field: 'garnerTel',width: 100 },
    { headerName: 'نام کارگزار', field: 'brokerName',width: 100 },
    { headerName: 'locationType', field: 'locationType',width: 100 },
    { headerName: 'جنسیت کارگزار', field: 'sex',width: 100 },
    { headerName: 'توضیحات', field: 'description',width: 100 },
    {
      headerName: 'عملیات', field: 'manage',width: 300,autoHeight: true, cellRenderer: function (params) {
        return `
      <button type="button" class="btn btn-md btn-cyan waves-effect">
          <i class="fa fa-edit"></i>
        </button>
        <button type="button"  (click)="dataModal.show()" class="btn btn-md btn-deep-orange waves-effect" alt="حذف">
          <i class="fa fa-trash-o"></i>
        </button>`
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
