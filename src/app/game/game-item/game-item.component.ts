import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Game } from '../game.model';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  num!: number;
  shuffled!: [];
  public cdRef: ChangeDetectorRef;

  constructor(public gameModel: Game, cdRef: ChangeDetectorRef) {
    this.cdRef = cdRef;
   }

  ngOnInit(): void {
    this.shuffled = JSON.parse(localStorage.getItem('array')!);
    this.gameModel.images = this.shuffled;
    this.num = JSON.parse(localStorage.getItem('size')!);
  }

  revealCard(id: number) {
    let card = this.gameModel.images.findIndex(x=>x.id == id);
    let cardItem = this.gameModel.images[card];
    cardItem.hidden ? cardItem.hidden = 0 : cardItem.hidden = 1;
    this.cdRef.detectChanges();
    localStorage.setItem('array', JSON.stringify(this.gameModel.images)); 
  }
}
