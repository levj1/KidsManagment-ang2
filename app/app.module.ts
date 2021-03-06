import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { EnfantListComponent } from './enfants/enfant-list.component';
import { LoginComponent } from './login/login.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule 
    ],
  declarations: 
  [ 
    AppComponent, 
    EnfantListComponent,
    LoginComponent,
    PracticeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
