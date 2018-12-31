import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/base/map.service';
import { QueryOptions } from 'src/app/services/generics/query-options';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss']
})
export class MapListComponent implements OnInit {

  constructor(private service: MapService) {

  }

  ngOnInit() {
    var option = new QueryOptions();
    this.service.list(option).subscribe(result => {
      this.rowData = result;
    });
  }

  columnDefs = [
    { headerName: 'نوع رکورد ', field: 'recordType', width: 100},
    { headerName: ' کدمنبع', field: 'sourceRef',width: 100 },
    { headerName: 'کدمقصد', field: 'mapCode',width: 100 },
    { headerName: 'کد تولیدکننده', field: 'producerCode',width: 100 },
    { headerName: 'فعال', field: 'Active',width: 100 },
    { headerName: 'درصد مالیات', field: 'taxRate',width: 100 },
    {
      headerName: 'عملیات', field: 'manage',width: 300,autoHeight: true, cellRenderer: function (params) {
        return `<div class="btn-group"><button type="button" class="btn btn-sm btn-outline-primary waves-effect">لیست نگاشت ها </button>
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
