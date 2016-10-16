import { Component, OnInit } from '@angular/core';
import {GameService} from "../game-service.service";
import {ActivatedRoute} from "@angular/router";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.css']
})
export class BossComponent implements OnInit {

  boss: {};

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map((params: any) => params.id)
      .switchMap(id => this.gameService.getBoss(id))
      .subscribe(res => this.boss = res);
  }

}
