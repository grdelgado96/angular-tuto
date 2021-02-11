import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import { UserService } from "src/app/services/user.service";
import { RegisterSuc, UserModel} from '../../models/LoginSuccesful';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string;
  password: string;
  confirmPassword: string; 
  passwordError: boolean;
  userModel: UserModel= {email:"user@prueba.com", password:"123"};
  registersuc: RegisterSuc;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    public userService: UserService
  ) { 
    
  }
  register() {
    this.router.navigateByUrl('home');
  

}
}


