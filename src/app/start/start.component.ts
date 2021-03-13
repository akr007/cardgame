import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Game } from '../game/game.model';
import { StartService } from './start.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public cdRef: ChangeDetectorRef;

  constructor(private _startService: StartService,
    private gameModel: Game,
    cdRef: ChangeDetectorRef) {
      this.cdRef = cdRef; 
    }

  ngOnInit(): void {
  }

  selectedOption: number = 6;
  displayColumns: number[] =   [6, 8, 10, 12, 14, 16, 18, 20];

  public addItem(){
    this._startService.addItem(this.selectedOption);
    localStorage.setItem('size', JSON.stringify(this.selectedOption));
    let shuffled = this.gameModel.images.sort(() => Math.random() - 0.5);
    localStorage.setItem('array', JSON.stringify(shuffled));

    for(let i=0;i<this.gameModel.images.length;i++) {
      let card = this.gameModel.images.findIndex(x=>x.hidden == 1);
      if(card != -1) {
        let cardItem = this.gameModel.images[card];
        cardItem.hidden == 1 ? cardItem.hidden = 0 : cardItem.hidden = 1;
        this.cdRef.detectChanges();
        localStorage.setItem('array', JSON.stringify(this.gameModel.images));
      }
    }
  }
}
