import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFakeService } from '../auth-fake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private fakeAuth: AuthFakeService
  ) { }

  ngOnInit() {
  }

  navigateToServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1'}, fragment: 'loading'});
  }

  login(): void {
    this.fakeAuth.login();
  }

  logout(): void {
    this.fakeAuth.logout();
  }

}
