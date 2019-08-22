import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
firstname:string="mohan";
lastname:string="kangula";
phoneno:number=9959373380;
age:number=30;
receivenewsletters:boolean=true;
gender:string="Male";
country:string="india";
address:string="http://www.facebook.com/mohan.kangula";

  ChangeData()
  {
   this.firstname="muthi";
this.lastname="kasaram";
this.phoneno;
this.age=33;
this.receivenewsletters=false;
this.country="USA";
  }
}