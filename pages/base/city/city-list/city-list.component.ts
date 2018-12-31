import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/base/city.service';
import { QueryOptions } from 'src/app/services/generics/query-options';
import 'ag-grid-enterprise/main';
import { Router } from "@angular/router";
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  constructor(private service: CityService, 
    private router: Router,   private _notifications: NotificationsService) {
  }

  ngOnInit() {
    var option = new QueryOptions();
    this.service.list(option).subscribe(result => {
      this.rowData = result;
    });
  }

  columnDefs = [
    {
      headerName: '#', width: 40, checkboxSelection: true, suppressSorting: true,
      suppressMenu: true
    },
    { headerName: 'کد شهر', field: 'cityCode', suppressSizeToFit: true },
    { headerName: 'نام شهر', field: 'cityName', suppressSizeToFit: true },
    { headerName: 'کد تلفن', field: 'telCode', suppressSizeToFit: true }
  ];


  rowData: any;
  private selectedRowId:number = 0;

  private onCellContextMenu($event) {
    console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
  }

  private onRowDoubleClicked($event) {
    var id = $event.data.id;
    this.router.navigate(['/city/', id = id]);
  }

  private onSelectionChanged(event) {
    if (event.api.getSelectedNodes().length > 0) {
      var selectedRow = event.api.getSelectedNodes()[0];
      this.selectedRowId = selectedRow.data.id;
    } else{
      this.selectedRowId = 0;
    }
  }

  private removeItem()
  {
   

    if(this.selectedRowId == 0){
      this._notifications.warn('سطری برای حذف انتخاب نشده است');
      return;
    }
    if (confirm('در صورت حذف قابل بازیابی نمی باشد')){
      this.service.delete(this.selectedRowId).subscribe(result => {
        this.rowData = this.rowData.filter(q => q.id != this.selectedRowId);
        this._notifications.success('حذف آیتم', 'حذف آیتم انجام شد');
      });
    }
  }
}

