import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-person',
  templateUrl: './customer-person.component.html',
  styleUrls: ['./customer-person.component.scss']
})
export class CustomerPersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*Minoo */
  public show: boolean = false;
  public buttonName: any = 'Show';

  toggle() {
    this.show = !this.show;

    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

}
