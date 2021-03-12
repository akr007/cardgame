import { Component, OnDestroy, OnInit,  } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(public nav: HeaderService) {
  }

  num!: number;

  ngOnInit(): void {
    this.nav.update();
    this.nav.show();
    this.num = JSON.parse(localStorage.getItem('size')!);
    console.log(this.num);
  }


}
