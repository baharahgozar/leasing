import { Component, OnInit } from '@angular/core';
import { ProvinceService } from 'src/app/services/base/province.service';
import { QueryOptions } from 'src/app/services/generics/query-options';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.scss']
})
export class ProvinceListComponent implements OnInit {

  constructor(private service: ProvinceService) {

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
    { headerName: 'کد استان', field: 'provinceCode', width: 100},
    { headerName: 'نام استان', field: 'provinceName',width: 530 },
    {
      headerName: 'عملیات', field: 'provinceName',width: 300,autoHeight: true, cellRenderer: function (params) {
        return `
        <button type="button" class="btn btn-md btn-unique waves-effect">لیست شهرها</button>
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
