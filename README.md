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

## Day 3:🙂
- Learn how to work with http post request and http get request.
- To post data to server i have cteated addFriend method,given parameter as friend with typehint Friend.
- In this method,wrote post request which looks like:this.http.post(url, data).Here,http is property of httpClient.
- Created url property in method with typehint as string.
- In app.component.ts imported service and created a constructor in the component class. Added a private "addFriendService" property with typehint AddFriendService.
- when form is submitted,called the addFriend method of the    addFriendService and passed the friend data to it.
- Followed all steps which are given below to post and get data.

## Steps:
01. Everything is set up in order to send data to your local api.
    - First, in the server.js file in the server folder, change the port to whatever number you like that is not occupied. Port numbers 9000 - 9100 are always safe, just make sure no other application is running on those ports.
    - In the server folder in your terminal, run the command <code>node server</code>. You won't get any confirmation that the server is running, just a blank new line. Now navigate to <code>localhost:PORT</code>.
    - You should see "Hello from server". That is because the get function in the server file with the root "/" as it's path sent it as a response.
    - You'll find an array allFriends, this is where you'll push your new friend to. But first, let's take a look at your friends in the server.
    - Add a new get function with path "allFriends" and send the allFriends variable as a response. <strong>If you make changes to your server, make sure it's not running and then run it again with the <code>node server</code> command.</strong>If you now navigate to <code>localhost:PORT/allFriends</code> you'll get to see all your friends.
    - Remember the url that we left empty? It's time to configure a path to which we'll post our data. Start by changing the url to <code>'http://localhost:PORT/'</code>.
    - Next, make a new post function with path "addFriend". In here, push the request body to the allFriends array.
    - If you now go to your form and add a friend, submit the form, you'll see in your server, localhost:PORT/allFriends, that the friend has been added to the list.
02. You've sent data, but now we also want to display the newly updated friend list on your page. To do this, we'll have to make a get request to the server.
    - We want to do this get request in 2 different cases, one is when the page loads and the other is when we post data to the server.
    - First, let's write the function itself and later call the function when we need it. Make a new public async function in the component and pass the url as a parameter. Typehint the parameter and the function. The function will return a Promise of type any. A typehint of a promise with type looks like this: <code>Promise<any></code>.
    - Then, add a fetch to the function and return and await it. The method should be get and the headers should be <code>'Content-Type': 'application/json'</code>.
    - Add a property to your component class called allFriends and in the fetch where you can access the fetched data, assign the value of the data to that property.
    - We now have our fetch working, let's call it when we submit the form first. To do this in the success part of the subscribe, call the function with url 'http://localhost:PORT/allFriends'.
    - To do it on page load, import OnInit. Next your AppComponent class has to implement it.
    - To make something happen on pageload, in the class add <code>ngOnInit(): any { something happens }</code>. In here, call your fetch function like we did previously for the form submit.
    - We now have our friend list updated in the property allFriends of the component class.
    -  To check if you have your friends data console log it.
03. Now we can display the friends in the template using the property allFriends.
    - To do this we'll use the ngFor loop, add the following code to a div: <code>*ngFor="let friend of allFriends"</code>.
    - In this div, if you enter {{ friend.email }} for example. You'll see that on your page you'll see all the emails of your friends displayed.
    - Now display all details of your friends, try adding new friends in the process. It updates instantly!

## Done with must have features!!!
![This is an image](https://media.giphy.com/media/3o6ZsSPemnF31VogEw/giphy.gif)    




