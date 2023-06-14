import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HomeTopComponent} from './components/home/home-top/home-top.component';
import { FormsModule } from '@angular/forms';
import { UtilityService } from './services/utility.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    HeaderComponent,
    HomeComponent,
    HomeTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
