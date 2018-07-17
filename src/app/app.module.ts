import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from 'src/app/about/about/about.component';
import { ViewallComponent } from './employee/viewall/viewall.component';
import { DetailsComponent } from './employee/details/details.component';

const route: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'empDetails',
    component:DetailsComponent

  },
  {
    path: 'emploeeDetails',
    component: ViewallComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ViewallComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(route),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
