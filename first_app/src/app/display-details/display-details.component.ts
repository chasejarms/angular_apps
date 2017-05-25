import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  showSecretParagraph: boolean = false;
  clicks: Array<number> = [];
  constructor() {}

  ngOnInit() {
  }
  toggleParagraphVisibility() {
    this.showSecretParagraph = !this.showSecretParagraph;
    this.clicks.push(this.clicks.length + 1);
    console.log(this.clicks);
  }
}
