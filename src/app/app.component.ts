import { Component } from '@angular/core';
import { Observable }  from 'rxjs/Observable';
import { AuthenticationService } from './utils/services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  loggedIn = true;

  post = {
    loading: true
  };

  constructor() { }

}
