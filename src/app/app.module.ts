import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxRootedModule } from 'projects/ngx-rooted/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxRootedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
