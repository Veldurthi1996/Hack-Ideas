import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from '../login/Login.module';
import { HomeModule } from '../home/home.module';
import { PipesModule } from 'src/pipes/pipes.module';
import { NewHackathonModule } from 'src/newHackathon/newHackathon.module';
import { NavigationModule } from 'src/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    PipesModule,
    NewHackathonModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
