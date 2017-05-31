import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../user-service/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  userService: UsersService;
  constructor(private users: UsersService) {}

  ngOnInit() {
    this.userService = this.users;
  }
}
