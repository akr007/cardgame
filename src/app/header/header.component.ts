
import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../game/game.model';
import { StartService } from '../start/start.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor( public nav: HeaderService,
      public _startService: StartService,
      public gameModel: Game,
      private route : ActivatedRoute, 
      private router : Router) {}

  ngOnInit(): void {
    
  }

 

  num: number =  6;
  displayColumns: number[] =   [6, 8, 10, 12, 14, 16, 18, 20];

  newGame() {
    this._startService.addItem(this.num);
    localStorage.setItem('size', JSON.stringify(this.num));
    let shuffled = this.gameModel.images.sort(() => Math.random() - 0.5);
    localStorage.setItem('array', JSON.stringify(shuffled));
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
    
    for(let i=0;i<this.gameModel.images.length;i++) {
      let card = this.gameModel.images.findIndex(x=>x.hidden == 1);
      if(card != -1) {
        let cardItem = this.gameModel.images[card];
        cardItem.hidden == 1 ? cardItem.hidden = 0 : cardItem.hidden = 1;
        localStorage.setItem('array', JSON.stringify(this.gameModel.images));
      }
    }
  }



}
