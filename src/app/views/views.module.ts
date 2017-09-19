import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent,
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
