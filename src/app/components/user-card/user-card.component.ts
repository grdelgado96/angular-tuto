import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Users, User} from "src/app/models/UserList"

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  public list:Array<string>=[];
  public fav:boolean;
  @Input() i: User;
  
  @Output() useritem = new EventEmitter<User>();

  flag(i:User){
    this.useritem.emit(i);
  }
  constructor() { }

  ngOnInit(): void {
    this.getlocal();
    
  }

  getlocal(){
this.list=JSON.parse(localStorage.getItem('listId'));
for(let item of this.list){
if(item == this.i.id)
this.fav=true;
}

  }
  setfav(i:User){
    this.fav=true;
    this.flag(i);
  }

}

