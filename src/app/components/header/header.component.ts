import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Users, User } from '../../models/UserList';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public name: string;
  public listUser: Users;
  public finallist: User;
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.nameUser();
  }
  nameUser() {
    this.name = this.userService.getNameLocal();
  }
  reset() {
    this.userService.resetLocalStorage();
    this.router.navigateByUrl('login');
  }
  getUserList() {
    
    this.userService.getUserList().subscribe((resp: Users) => {
      this.listUser = resp;
      localStorage.setItem('users', JSON.stringify(this.listUser.data));
      console.log(this.listUser.data);
      this.router.navigateByUrl('user');
    }, error => {
      console.log(error);
    })
  }
  home() {
    this.router.navigateByUrl('home');
  }
  
}
