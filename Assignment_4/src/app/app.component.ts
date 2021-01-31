import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment4';
  numArr=[];
  numEmitted(num:number){
    console.log(num);
    this.numArr.push(num);
  }
}
