import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {
  visible: boolean;
  _num!: number;

  constructor() { this.visible = false; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  setNumber(num: number) {
    this._num = num;
  }

  getNumber(): number {
    return this._num;
  }

  update() {
    this._num = this.getNumber();
  }

}