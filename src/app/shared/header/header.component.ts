import { Component, OnInit } from '@angular/core';
import { Observable }  from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { User } from '../../utils/models/';
import { UserService } from '../../utils/services/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {
  users: User[] = [];
  userIsAuth: false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
        .subscribe(users => {
            this.users = users;
        });
  }
}
