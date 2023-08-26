import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string='';
  password:string='';
  constructor(public router:Router){

  }
  onClicksignin(){
    this.router.navigate(['/Studentlist']) 
  }
}
