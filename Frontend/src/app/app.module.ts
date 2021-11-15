import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StartScreenComponent} from './start-screen/start-screen.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { GameboardComponent } from './gameboard/gameboard.component';
import { AttemptComponent } from './attempt/attempt.component';
import { LoggingComponent } from './logging/logging.component';
import {OutgoingInterceptor} from "./interceptors/outgoing.interceptor";
import { FilterIrrelevantRequestsPipe } from './pipes/filter-irrelevant-requests.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    GameboardComponent,
    AttemptComponent,
    LoggingComponent,
    FilterIrrelevantRequestsPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: OutgoingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
