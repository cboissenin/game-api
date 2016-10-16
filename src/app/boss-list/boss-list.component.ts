import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { GameService } from "../game-service.service";

@Component({
  selector: 'app-boss-list',
  templateUrl: './boss-list.component.html',
  styleUrls: ['./boss-list.component.css']
})
export class BossListComponent implements OnInit {

  bossData$: Observable<{}>;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.bossData$ = this.gameService.getAllBoss();
  }

}
