import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './users/register/register.component';

import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";
import { WeatherComponent } from './weather/weather.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChatComponent } from './chat/chat.component'

const config: SocketIoConfig = { url: 'http://localhost:3005', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WeatherComponent,
    HomepageComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
