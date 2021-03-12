import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../game/game.model';
import { HeaderService } from '../header/header.service';
import { StartService } from './start.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private _startService: StartService,
    private gameModel: Game) { }

  ngOnInit(): void {
  }

  selectedOption: number = 6;
  displayColumns: number[] =   [6, 8, 10, 12, 14, 16, 18, 20];

  public addItem(){
    this._startService.addItem(this.selectedOption);
    localStorage.setItem('size', JSON.stringify(this.selectedOption));
    let shuffled = this.gameModel.images.sort(() => Math.random() - 0.5);
    localStorage.setItem('array', JSON.stringify(shuffled));
    console.log(localStorage);
  }


}
