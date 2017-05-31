import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../user-service/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  usersService: UsersService;
  constructor(private users: UsersService) {}

  ngOnInit() {
    this.usersService = this.users;
  }
}
