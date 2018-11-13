import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LeagueDetailComponent } from './components/leagueDetail/leagueDetail.component';

// Modules
import { AppRoutingModule } from './routing/routing-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Services
import { HomeRequestService } from './services/homeRequest.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LeagueDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HomeRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
