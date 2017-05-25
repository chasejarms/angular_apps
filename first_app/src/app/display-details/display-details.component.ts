import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  showSecretParagraph: boolean = false;
  clicks: Array<any> = [];
  constructor() {}

  ngOnInit() {
  }
  toggleParagraphVisibility() {
    this.showSecretParagraph = !this.showSecretParagraph;
    this.clicks.push(new Date());
  }
}
