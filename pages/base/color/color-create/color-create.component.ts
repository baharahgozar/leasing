import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-create',
  templateUrl: './color-create.component.html',
  styleUrls: ['./color-create.component.scss']
})
export class ColorCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
