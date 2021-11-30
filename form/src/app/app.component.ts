import { Component } from '@angular/core';
// import { getMaxListeners } from 'process';
import {Friend} from './friend';
import {NgForm} from '@angular/forms';
import { AddFriendService } from './add-friend.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'form';    
  languages=[
    {
      "language": "HTML"
    },
    {
      "language": "CSS"
    },
    {
      "language": "JavaScript"
    },
    {
      "language": "PHP"
    },
    {
      "language": "None"
    }
  ];

 friendModel= new Friend(' ',' ',' ',' ' ,' '); 
 message: any = [];
  
 constructor(private addFriendService: AddFriendService) {}

 ngOnInit(): void {
  this.addFriendService.getFriend().subscribe((message) => (this.message = message));
}

 onSubmit(valform: NgForm) {
  this.addFriendService.addFriend(this.friendModel,' ')
  .subscribe((message: Friend) => {console.log("it worked")}, error =>{console.log("it didn't work")});
  // this.addFriendService.postFriend().subscribe((message) => (this.message = message));
}


}

