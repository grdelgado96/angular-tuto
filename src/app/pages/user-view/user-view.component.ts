import { Component, OnInit } from '@angular/core';
import { Users, User } from '../../models/UserList';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  public listUser:Users;
  public Flag:boolean;
  constructor() { }

  ngOnInit(): void {
    this.getListUser();
  }
  getListUser(){
    this.listUser = JSON.parse(localStorage.getItem('users'));
  }
  flag(){
    this.Flag=(!this.Flag);
  }
  
}
