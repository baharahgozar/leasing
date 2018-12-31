import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agency-create',
  templateUrl: './agency-create.component.html',
  styleUrls: ['./agency-create.component.scss']
})
export class AgencyCreateComponent implements OnInit {

  constructor(private router: Router) { }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  ngOnInit() {
  }

}
