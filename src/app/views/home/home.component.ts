import { Component, OnInit } from '@angular/core';

import { User } from '../../utils/models/';
import { UserService } from '../../utils/services/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
        .subscribe(users => {
            this.users = users;
        });
  }
}
