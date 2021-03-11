import { Injectable } from '@angular/core';

@Injectable()
export class StartService {
    size!: number;
 
    addItem(item: number) {
        this.size = item;
    }
 
    getItems(): number {
        return this.size;
    }

}