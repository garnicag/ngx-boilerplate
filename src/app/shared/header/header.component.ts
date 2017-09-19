import { Component, OnInit } from '@angular/core';
import { Observable }  from 'rxjs/Observable';

import { User } from '../../state/users';
import { UserFacade } from '../../state/users/user.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {
  user$: Observable<User> = this.userService.user$;

  constructor(private userService:UserFacade) { }

  ngOnInit() {
  }

}
