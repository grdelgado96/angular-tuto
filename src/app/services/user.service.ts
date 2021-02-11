import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParameterCodec, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environmentuser } from '../../environments/environment';
import { LoginSuc, RegisterSuc, UserModel } from '../models/LoginSuccesful';
import { Users ,User } from '../models/UserList';
import { Profile, loc, UserProfileParams } from '../models/UserProfile';
import { CookieService } from "ngx-cookie-service";

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
export class UserService {
  protected apiUrl: String;
  public appid: string = "60226f666c9e31d600a269a0";

  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) {
    this.apiUrl = environmentuser.apiUrl;
  }

  public getUserList(): Observable<Users> {
    let header = new HttpHeaders().append('app-id', this.appid);
    return this.http.get<Users>(this.apiUrl + "/user", {
      headers: header
    });
  }

  public getUserProfile(paramsI: UserProfileParams): Observable<Profile> {
    let header = new HttpHeaders().append('app-id', this.appid);
    return this.http.get<Profile>(this.apiUrl + "/user/0F8JIqi4zwvb77FGz6Wt", {
      headers: header,
    });
  }


  setNameLocal(nameU: string) {
    localStorage.setItem('name', nameU);
    console.log(nameU);
  }
  getNameLocal(): string {
    return localStorage.getItem('name');
  }
  resetLocalStorage() {
    localStorage.clear();
  }
}

