import { Component } from '@angular/core';
// import { getMaxListeners } from 'process';
import {Friend} from './friend';
import {NgForm} from '@angular/forms';


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

 onSubmit(valform: NgForm) {
  console.log(this.friendModel);  // { first: '', last: '' }
  
}

}


  