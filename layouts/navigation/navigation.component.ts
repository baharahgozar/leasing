import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav') sidenav: ElementRef;


  clicked: boolean;
  showMenu:boolean = true;

  constructor(private authService:AuthenticationService) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }
  
  @Output() showMenuEvent = new EventEmitter<boolean>();
  changeMainMenuState() {
    this.showMenuEvent.emit(!this.showMenu);
    this.showMenu = !this.showMenu;
  }

  logOut(){
    this.authService.logout();
  }
}
