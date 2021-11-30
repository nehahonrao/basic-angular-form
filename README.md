# basic-angular-form
- ## Date:29-11-2021.
- ## Duration: 3 days. 
- This is assignment for learning angular framework with Typescript.
## DAY 1:🙂
- Installed node.js,npm and angular cli.
- created new project and run it on browser with "ng serve" command.
- Came to know what is template and component in app.component.
- HTML structure contains in template-app.component.html while all     your JS contain in component-app.component.ts.
- Created form which contain information about friend-firstname, lastname,email,phone-number,address and favourite language etc...
- Understanding concept of "NgFor directive".Its a structural directive, meaning that it changes the structure of the DOM. 
- Used 'NgFor directive' for selecting options.
- NgModel is used for binding data to model.

## DAY 2:🙂
- Used ngSubmit property to submit form,bind function to ngSubmit property,it looks like:(ngSubmit)="onSubmit(valform)",where valform is formname.after that in component class define function and console friendModel so when form is submitted I can see all data in console.
- To add that data in server I created service for it by using "ng g s addFriend" command.This means  This means, a"ng"ular "g"enerate "s"ervice with name "addFriendService".
- Imported httpClient in addFriendservice.ts file:import { HttpClient } from '@angular/common/http'.
- In AddFriendService class,added http as private property like: constructor(private http: HttpClient).Here HttpClient is typehint.
- Imported HttpClientModule in app.module.ts and added in import array.



