import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) {
              }
logOut() {
 this.authService.logout().subscribe(() => {
   this.router.navigate(['/']);
 });
}


  ngOnInit() {
  }

}
