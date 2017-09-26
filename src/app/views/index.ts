import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    CommonModule
  ]
})
export class ViewsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ViewsModule
    };
  }
}
