import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend} from './friend';
import { Observable } from 'rxjs';
import { MessageBundle } from '@angular/compiler';
import { AppComponent} from './app.component';
@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  
  url = 'http://localhost:6969/friends'; 
  constructor(private http: HttpClient) { }

  addFriend(friend:Friend,url:string) :Observable<any>{
    return this.http.post(url,friend)
  
  }

  getFriend(url: string):Observable<any> {
    return this.http.get(url);
  }
}
