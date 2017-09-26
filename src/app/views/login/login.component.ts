import { Component } from '@angular/core';
import { Observable }  from 'rxjs/Observable';

import { Router } from '@angular/router';

import { AuthenticationService } from '../../utils/services/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent {
  model: any = {};
  loading = false;
  error = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          this.error = true;
          this.loading = false;
        }
      });
  }
 
}
