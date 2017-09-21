import { Component, OnInit } from '@angular/core';
import { Observable }  from 'rxjs/Observable';
import { Store } from '@ngrx/store';

//import { User } from '../../state/users';
//import { UserFacade } from '../../state/users/user.facade';
import { PostsQuery } from '../../state/posts/post.reducer';
import { AppState }  from '../../state/state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {
  post$ = this.store.select(PostsQuery.getPost);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
  }

}
