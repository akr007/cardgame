import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header/header.service';
import { StartService } from '../start/start.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(public nav: HeaderService,
    private _startService: StartService) {
  }

  num!: number;

  ngOnInit(): void {
    this.nav.update();
    this.nav.show();
    this.num = JSON.parse(localStorage.getItem('size')!);
    console.log(this.num);
  }

  numSequence(n: number): Array<number> { 
    return Array(n); 
  } 

}
