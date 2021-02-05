import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameInfo, GameLookupParams} from 'src/app/models/GameLookup';
import { GameService } from 'src/app/services/game.service';
@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {

  public gameinfo:GameInfo;
  public loading:boolean = false;

  constructor(
    private gameService:GameService,
    private route: ActivatedRoute,
    private location: Location
  ) { 
  }

  ngOnInit(): void {
    this.viewHero();
}
  viewHero():void{
    this.loading = true;
    let params:GameLookupParams=<GameLookupParams>{};
    params.id = this.route.snapshot.paramMap.get('id');
    
    this.gameService.getGameLookup(params).subscribe((resp:GameInfo)=>{
      this.loading = false;
      this.gameinfo = resp;
      
    },error=>{
      console.log(error);
    })
  }

}
