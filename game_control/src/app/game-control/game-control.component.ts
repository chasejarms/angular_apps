import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  incrementingNumber: number = 0;
  @Output('numberIncremented') incrementNumber = new EventEmitter<Number>();
  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.incrementNumber.emit(this.incrementingNumber + 1);
      this.incrementingNumber += 1;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
