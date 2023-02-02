import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JkdAngularComponentPackageModule } from 'jkd-angular-component-package';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JkdAngularComponentPackageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
