import { NotaryService } from 'src/app/services/base/notary.service';
import { Component, OnInit } from '@angular/core';
import { QueryOptions } from 'src/app/services/generics/query-options';

@Component({
  selector: 'app-notary-list',
  templateUrl: './notary-list.component.html',
  styleUrls: ['./notary-list.component.scss']
})
export class NotaryListComponent implements OnInit {

  constructor(private service: NotaryService) {

  }

  ngOnInit() {
    var option = new QueryOptions();
    this.service.list(option).subscribe(result => {
      this.rowData = result;
    });
  }

  columnDefs = [
    { headerName: 'کد نمایندگی ', field: 'code',width: 100 },
    { headerName: ' تلفن نمایندگی ', field: 'tel',width: 300 },
    { headerName: 'آدرس نمایندگی ', field: 'address',width: 100 },
    { headerName: ' کد شهر نمایندگی', field: 'cityID',width: 200 },
    { headerName: 'نام کارگزار', field: 'brokerName',width: 100 },
    { headerName: 'نام مسئول  ', field: 'responsibleName',width: 100 },
    {
      headerName: 'عملیات', field: 'manage',width: 300,autoHeight: true, cellRenderer: function (params) {
        return `<div class="btn-group"><button type="button" class="btn btn-sm btn-outline-primary waves-effect"> لیست نمایندگی ها </button>
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
