import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loginFailed: boolean = false;
  constructor(private service: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }
  onSubmit() {

    this.service.login(this.model.userName, this.model.password).subscribe(result => {
      if (result) {
        location.reload(true);
        // this.router.navigate(['/city/', id:10]);

        //ارسال پارامتر به کامپوننت دیگر

        //استفاده از لینک
        //<a *ngFor="let product of products"
        // [routerLink]="['/product', product.id]">

        //استفاده از router
        //this.router.navigate(['/product', product.id]);

        //خواندن پارامتر از آدرس بار
        // constructor(private route: ActivatedRoute) {}
        //this.route.snapshot.params.id;
      }
    });
  }
}
