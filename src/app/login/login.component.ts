
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import { AnimationDurations } from '@angular/material/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  user: string;
  password: string;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  login() {
    console.log(this.user);
    console.log(this.password);
    if(this.user != 'user'&& this.password != '123'){
      this.snackBar.open("Incorrect Credencial", "" ,{
        duration: 1500,
      }); 
    } else {
      this.router.navigateByUrl('home');
    }
  }
}
