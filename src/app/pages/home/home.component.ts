import { Component, OnInit } from '@angular/core';
import { GameList, GameParams } from 'src/app/models/GameList';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listGame:GameList[]=[];
  search:string;
  public loading:boolean=false;
  
  

  constructor(
    private gameService:GameService,
    private userService:UserService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    
  }

  searchgame(){
    this.loading=true;
    console.log(this.search);
    let params:GameParams=<GameParams>{};
    params.title = this.search;
    params.limit = 10;
    params.exact = false;
    this.gameService.getGameCollection(params).subscribe((resp:GameList[])=>{
        this.listGame = resp;
        this.loading=false;
    },error=>{
      console.log(error);
    })

  }
  view(game: GameList) {
    this.router.navigate(['/view', { id: game.gameID }]);
  }

  

}
