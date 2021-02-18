import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Location } from '@angular/common';
import { GameInfo, GameLookupParams, Deal} from 'src/app/models/GameLookup';
import { GameService } from 'src/app/services/game.service';
@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit{

  public gameinfo:GameInfo;
  public loading:boolean = false;
  public expensive:number=0;
  public average:number=0;
  public load:boolean=true;
  public sum:number=0;
  public spinner:boolean=true;
  

  constructor(
    private gameService:GameService,
    private route: ActivatedRoute,
    private router: Router,
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
      
      this.gameinfo = resp;
      this.averagePrice(this.gameinfo);
      
    },error=>{
      console.log(error);
    })
  }
  mostExpensive (game:GameInfo): number{
    for(let i of game.deals){
      console.log("price");
      console.log(i.price);
    if(i.price>this.expensive){
      this.expensive=i.price;
    }
  }
  return this.expensive;
  }
  averagePrice (game:GameInfo): number{
    this.sum = 0;
    for(let i of game.deals){
    this.sum +=Number(i.price);
    
    }
    this.average= this.sum / Number(game.deals.length);
    this.loading = false;
    this.spinner = false;
   return this.average;
    
  
  }
  return() {
    this.router.navigateByUrl('home');
  }

}
