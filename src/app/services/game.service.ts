import { HttpClient, HttpHeaders, HttpParameterCodec, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { GameParams,GameList } from '../models/GameList';
import { GameInfo, GameLookupParams} from 'src/app/models/GameLookup';
class ParameterCodec implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}
const PARAMETER_CODEC = new ParameterCodec();

@Injectable({
  providedIn: 'root'
})


export class GameService {

  protected apiUrl:String;
  protected version:String;

  constructor(
    private http:HttpClient
  ) { 
     this.apiUrl = environment.apiUrl;
     this.version = environment.version; 
  }

  public getGameCollection(paramsI:GameParams):Observable<GameList[]>{
    let __params = new HttpParams({encoder:PARAMETER_CODEC});
    let header = new HttpHeaders();
    if(paramsI.title != null ) __params = __params.append('title',paramsI.title.toString());
    if(paramsI.steamAppID !=null) __params = __params.set('steamAppID',paramsI.steamAppID.toString());
    if(paramsI.limit != null) __params = __params.set('limit',paramsI.limit.toString());
    if(paramsI.exact != null) __params = __params.set('exact',paramsI.exact.toString());
    console.log(__params);
    return this.http.get<GameList[]>(this.apiUrl+"/"+this.version+"/games",{
      headers:header,
      params:__params
    });
  }

  public getGameLookup(paramsI:GameLookupParams):Observable<GameInfo>{
    let __params = new HttpParams({encoder:PARAMETER_CODEC});
    let header = new HttpHeaders();
    if(paramsI.id!= null ) __params = __params.append('id',paramsI.id.toString());
    console.log(__params);
    return this.http.get<GameInfo>(this.apiUrl+"/"+this.version+"/games",{
      headers:header,
      params:__params
    });
  }


}
