
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Profile, loc, UserProfileParams } from 'src/app/models/UserProfile';
import { UserService } from 'src/app/services/user.service';

export interface UserModel {
  user: string;
  password: string;
  userId: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: string;
  password: string;
  userModel: UserModel = { user: "user", password: "123", userId: "0F8JIqi4zwvb77FGz6Wt" };
  public profile: Profile;
  public listId:Array<string>=[];

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) { }

  login() {
    let params: UserProfileParams = <UserProfileParams>{};
    params.id = this.userModel.userId;
    this.userService.getUserProfile(params).subscribe((resp: Profile) => {
      this.profile = resp;
      console.log(this.profile);
      if(this.profile!= null && this.password=="123"){
        this.router.navigateByUrl('home');
        this.userService.setNameLocal(this.profile.firstName);
        localStorage.setItem('currentUser',this.profile.id);
        localStorage.setItem('listId',JSON.stringify(this.listId));
      }else
      this.snackBar.open("Incorrect Credencial", "", {duration: 1500,});
      
    }, error => {
      console.log(error);
      this.snackBar.open("Incorrect Credencial", "", {duration: 1500,});
    })

  }
}
