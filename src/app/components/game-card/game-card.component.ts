import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { GameList } from 'src/app/models/GameList';
import {HomeComponent} from 'src/app/pages/home/home.component'

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() game: GameList;
  @Output() gameitem = new EventEmitter<GameList>();

  view(game: GameList) {
    this.gameitem.emit(game);
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
