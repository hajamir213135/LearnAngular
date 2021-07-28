import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './http/http.component';
import { ObsComponent } from './obs/obs.component';
import { PagenotComponent } from './pagenot/pagenot.component';
import { SendemailComponent } from './sendemail/sendemail.component';
import { SentemailComponent } from './sentemail/sentemail.component';
import { TestserverComponent } from './testserver/testserver.component';

const routes: Routes = [
  {path:'' , component:HomeComponent },
  {path:'test' , component: TestserverComponent },
  {path:'rxjs' , component: ObsComponent },
  {path:'home' , component:HomeComponent },
  {path:'contact-us' , component:AboutComponent },
  {path:'sendemail' , component:SendemailComponent },
  {path:'sentemail' , component:SentemailComponent },
  {path:'form' , component:FormsComponent },
  {path:'http' , component:HttpComponent },
  {path:'count' , component:CountComponent },
  {path:'**', component:PagenotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
