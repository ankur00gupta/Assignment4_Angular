import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() incrementCnt=new EventEmitter<number>();
  ref:any;
  count=0;
  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    // var cnt=this.count;
    this.ref=setInterval(()=>{      
      // console.log(this.count++);
      this.incrementCnt.emit(++this.count);
    },1000);
  }

  onStop(){
    clearInterval(this.ref);
  }
}
