import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 itens = [];
 next = 0;
  constructor() { }

  ngOnInit() {
  }

  addItem(item: string){
    if(this.itens.length == 0) this.itens[0] = item;
    else{
    this.next = this.itens.length;
    this.itens[this.next] = item;
    }
    console.log(this.itens);
  }

  deleteItem(index: number, item: string){
    console.log(index, item);
  }
}
