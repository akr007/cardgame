import { Component, OnInit } from '@angular/core';
import { StartService } from '../start/start.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public nav: HeaderService,
    private _startService: StartService) {}

  
  num: number =  6;

  ngOnInit(): void {
    
  }

  public setNumber() {
    this.num = this.nav.getNumber();
  }

  selectedOption!: number;
  displayColumns: number[] =   [6, 8, 10, 12, 14, 16, 18, 20];

  public addItem(){
    this._startService.addItem(this.selectedOption);
    localStorage.setItem('size', JSON.stringify(this.selectedOption));
  }

}
