import { Component, OnInit } from '@angular/core';
import { GameInfo, GameLookupParams} from 'src/app/models/GameLookup';
import { GameService } from 'src/app/services/game.service';
@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {

  public gameinfo:GameInfo;

  constructor(
    private gameService:GameService
  ) { }

  ngOnInit(): void {
    


  }

}
