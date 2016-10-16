import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import {BossComponent} from "../boss/boss.component";
import {BossListComponent} from "../boss-list/boss-list.component";

@NgModule({
  imports: [
    RouterModule.forRoot([

      { path: '', redirectTo: '/boss',  pathMatch: 'full'},
      { path: 'boss', component: BossListComponent },
      { path: 'boss/:id', component: BossComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
