import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/base/color.service';
import { QueryOptions } from 'src/app/services/generics/query-options';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss']
})
export class ColorListComponent implements OnInit {

  constructor(private service: ColorService, private router: Router) {

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

  gridOptions = {
    getRowStyle: function (params) {
      if (params.node.rowIndex % 2 === 0) {
        return { background: '#ddd' }
      }
    }
  }
  columnDefs = [
    { headerName: 'کد رنگ', field: 'colorCode', width: 200 },
    { headerName: 'نام رنگ', field: 'colorName', width: 300 },
    { headerName: 'رنگ', field: 'rgb', width: 100 },
    { headerName: 'فعال', field: 'isActive', width: 100 },
    {
      headerName: 'عملیات', field: 'manage',width: 400,autoHeight: true, cellRenderer: function (params) {
        return `<button type="button" class="btn btn-md btn-unique waves-effect">لیست نگاشت ها </button>
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

  removeRow(event) {
    alert('remove');
  }

}
