import { Component, OnInit } from '@angular/core';
import { QueryOptions } from 'src/app/services/generics/query-options';
import { DocumentService } from 'src/app/services/base/document.service';


@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {

  constructor(private service: DocumentService) {

  }

  ngOnInit() {
    var option = new QueryOptions();

    this.service.list(option).subscribe(result => {
      this.rowData = result;
    });

  }

  columnDefs = [
    { headerName: 'نوع فروش (نقدی،اقساطی،اجاره به شرط تملیک) ', field: 'saleType', width: 200},
    { headerName: ' نوع مدرک (پذیرشی،تحویلی) ', field: 'documentType', width: 200},
    { headerName: ' کد مدرک ', field: 'documentTitle', width: 100},
    { headerName: ' مدارک مربوط به (متقاضی،ضامن اول) ', field: 'documentRelatedTo', width: 200},
    { headerName: ' فعال ', field: 'active', width: 100},
    { headerName: ' tt ', field: 'tt', width: 100},

    {
      headerName: 'عملیات', field: 'manage',width: 300,autoHeight: true, cellRenderer: function (params) {
        return `<div class="btn-group"><button type="button" class="btn btn-sm btn-outline-primary waves-effect">لیست اسناد و مدارک </button>
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
