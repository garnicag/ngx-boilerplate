import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    EffectsModule.forRoot([

    ]),

    StoreModule.forRoot({

    }),

    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [

  ],
})
export class AppStateModule { }
