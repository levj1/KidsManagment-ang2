import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EnfantListComponent } from './enfants/enfant-list.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: 
  [ 
    AppComponent, 
    EnfantListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
