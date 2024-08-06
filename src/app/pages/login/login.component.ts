import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private _router: Router){}

  loginObj: any = {
      
    "userName": "",
    "password": ""
  
}

onLogin(){
   this._router.navigateByUrl('home');
}

}
