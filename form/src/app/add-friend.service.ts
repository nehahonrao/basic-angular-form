import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Friend} from './friend';
import { Observable } from 'rxjs';
import { MessageBundle } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  
  constructor(private http: HttpClient) { }

  addFriend(friend:Friend,url:string) :Observable<any>{
    const url1 = 'http://localhost:6969/friends';
    return this.http.post(url, friend);
    console.log(friend);
  }
  postFriend(friend:Friend):Observable<any> {
    const url1 = 'http://localhost:6969/friends';
    return this.http.post(url1,friend);
  }

  getFriend():Observable<any> {
    const url = 'http://localhost:6969/friends';
    return this.http.get(url);
  }
}
