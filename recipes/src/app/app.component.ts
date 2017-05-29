import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentLink: string = 'recipe';
  updatePage(link: string) {
    this.currentLink = link;
  }
}
