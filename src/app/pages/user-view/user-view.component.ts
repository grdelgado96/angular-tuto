import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users, User } from '../../models/UserList';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  public listUser:User;
  
  public spinner:boolean=true;
  public bool:boolean=false;
  public listId:Array<string>=[];
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getListUser();
  }
  getListUser(){
    this.listUser = JSON.parse(localStorage.getItem('users'));
    this.bool=true;
    this.spinner=false;
  }
  flag(i:User){
    
    this.listId=JSON.parse(localStorage.getItem('listId'));
    this.listId.push(i.id);
    localStorage.setItem('listId',JSON.stringify(this.listId));
    console.log(localStorage.getItem('listId'))
  }
  return() {
    this.router.navigateByUrl('home');
  }
  
  
}
