import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  num!: number;
  shuffled!: [];

  constructor(public gameModel: Game) { }

  ngOnInit(): void {
    this.shuffled = JSON.parse(localStorage.getItem('array')!);
    console.log(this.shuffled);
    console.log(this.gameModel.images);
    this.num = JSON.parse(localStorage.getItem('size')!);
    console.log(this.num);
  }

  reShuffle() {
    this.gameModel.images.sort(() => Math.random() - 0.5);
  }
}
