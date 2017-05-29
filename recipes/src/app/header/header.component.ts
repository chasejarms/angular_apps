import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  onSelectLink(selectedLink: string) {
    this.selectedLink.emit(selectedLink);
  }

  @Output('link') selectedLink = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }
}
