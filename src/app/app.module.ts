import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AppComponent } from './app.component';
import { GameService } from "./game-service.service";

import { DataTableModule, SharedModule, FieldsetModule } from 'primeng/primeng';
import { BossComponent } from './boss/boss.component';
import { BossListComponent } from './boss-list/boss-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BossComponent,
    BossListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    AppRoutingModule,
    FieldsetModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
