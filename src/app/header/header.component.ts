import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { ToastService } from 'src/service/toast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  

  isAdmin: boolean = false;


  constructor(
    private router: Router,
    private toastService: ToastService,
    private cookieService: CookieService,
  ) {}

  ngOnInit(): void {
    const token = this.cookieService.get('token');
    if(token) {
      this.currentUser = jwt_decode(token);
      this.isAdmin = this.currentUser?.role === 'admin';
      console.log("🤜 ~ currentUser:", this.currentUser)
      
    }
  }
  // reloadCurrentRoute() {
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['/login']);
  //   });
  // }

  navigateAdminPage() {
    this.router.navigate(['/admin']);
  }

  logOut() {
    this.cookieService.deleteAll();
    this.toastService.show('Logout successfully!');
    this.router.navigate(['/login'])
  }

  login() {
    this.router.navigate(['/login']);
  }
}

  