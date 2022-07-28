import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('myCarousel', { static: false })
  myCarousel!: { next: () => void; prev: () => void; play: () => void; overflowCellsLimit: () => void; };

  next() {
      this.myCarousel.next();
  }
  prev() {
    this.myCarousel.prev();
  }
  play() {
    this.myCarousel.play();
  }
  overflowCellsLimit() {
    this.myCarousel.overflowCellsLimit();
  }

}
