import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PersonalInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
          path : 'home',
          component : HomeComponent
        },
        {
          path : 'pi',
          component : PersonalInformationComponent
        }
      ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
