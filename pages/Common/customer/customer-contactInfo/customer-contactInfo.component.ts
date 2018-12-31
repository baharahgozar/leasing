import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-contactInfo',
  templateUrl: './customer-contactInfo.component.html',
  styleUrls: ['./customer-contactInfo.component.scss']
})
export class CustomerContactInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gridOptions = {
    getRowStyle: function (params) {
      if (params.node.rowIndex % 2 === 0) {
        return { background: '#ddd' }
      }
    }
  }
  columnDefs = [
    { headerName: 'نوع آدرس', field: 'AddressType', width: 100 },
    { headerName: 'آدرس', field: 'FullAddress', width: 500 },
    { headerName: 'کد پستی', field: 'PostalCode', width: 100 },
    {
      headerName: 'عملیات', field: 'provinceName', width: 300, autoHeight: true, cellRenderer: function (params) {
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

  columnDefsPhone = [
    { headerName: 'پیش فرض', field: 'AddressType', width: 150 },
    { headerName: 'نوع تلفن', field: 'FullAddress', width: 300 },
    { headerName: 'نسبت', field: 'PostalCode', width: 100 },
    { headerName: 'پیش شماره تلفن', field: 'PostalCode', width: 100 },
    { headerName: 'شماره تلفن', field: 'PostalCode', width: 100 },
    {
      headerName: 'عملیات', field: 'provinceName', width: 300, autoHeight: true, cellRenderer: function (params) {
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

}
