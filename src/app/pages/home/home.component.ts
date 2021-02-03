import { Component, OnInit } from '@angular/core';
import { GameList, GameParams } from 'src/app/models/GameList';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listGame:GameList[];
  public searchName:string="batman";

  constructor(
    private gameService:GameService
  ) { }

  ngOnInit(): void {
    let params:GameParams=<GameParams>{};
    params.title = this.searchName;
    params.limit = 10;
    params.exact = false;
    this.gameService.getGameCollection(params).subscribe((resp:GameList[])=>{
        this.listGame = resp;
    },error=>{
      console.log(error);
    })
  }

}
