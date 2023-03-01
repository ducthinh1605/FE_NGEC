import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

/**
 * @title Inputs in a form
 */
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],

})
export class LoginComponent {
  color: ThemePalette = 'warn';
  ischecked = true;
    imageUrl = './assets/img/logo.png';
  
}
