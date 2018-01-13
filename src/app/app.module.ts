import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { CountryService, AuthGuard, AuthService} from './services';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { Http, HttpModule } from "@angular/http";
import { UnauthorizedComponent } from './unauthorized/unauthorized.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UserprofileComponent,
    UnauthorizedComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CountryService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
