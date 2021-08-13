import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { ServerService } from './services/server.service';
import { TestserverComponent } from './testserver/testserver.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagenotComponent } from './pagenot/pagenot.component';
import { ObsComponent } from './obs/obs.component';
import { FormsComponent } from './forms/forms.component';
import { CountComponent } from './count/count.component';
import { SendemailComponent } from './sendemail/sendemail.component';
import { SentemailComponent } from './sentemail/sentemail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpcComponent } from './httpc/httpc.component';
import { HttppostComponent } from './httppost/httppost.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    TestserverComponent,
    HomeComponent,
    AboutComponent,
    PagenotComponent,
    ObsComponent,
    FormsComponent,
    CountComponent,
    SendemailComponent,
    SentemailComponent,
    HttpcComponent,
    HttppostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
