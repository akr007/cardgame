import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header/header.service';
import { StartService } from './start.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private router: Router,
    private _startService: StartService,
    private _headerService: HeaderService,) { }

  ngOnInit(): void {
  }

  selectedOption: number = 3;
  displayColumns: number[] =   [3, 4, 5, 6, 7, 8, 9, 10];

  public addItem(){
    this._startService.addItem(this.selectedOption);
    this._headerService.setNumber(this.selectedOption);
    localStorage.setItem('size', JSON.stringify(this.selectedOption));
  }


}
