import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  
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
    { headerName: 'نوع آدرس', field: 'AddressType', width: 100},
    { headerName: 'آدرس', field: 'FullAddress',width: 500},
    { headerName: 'کد پستی', field: 'PostalCode',width: 100 },    
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

  columnDefsPhone = [
    { headerName: 'پیش فرض', field: 'AddressType', width: 150},
    { headerName: 'نوع تلفن', field: 'FullAddress',width: 300},
    { headerName: 'نسبت', field: 'PostalCode',width: 100 },    
    { headerName: 'پیش شماره تلفن', field: 'PostalCode',width: 100 }, 
    { headerName: 'شماره تلفن', field: 'PostalCode',width: 100 },     
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


  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }



}
