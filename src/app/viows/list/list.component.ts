import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 itens = [];
 next = 0; //tamanho do array
  constructor() { }

  ngOnInit() {
  }

  addItem(item: string){
    if(this.itens.length == 0) this.itens[0] = item; //Caso o array ainda esteja vazio
    else{
    this.next = this.itens.length;
    this.itens[this.next] = item; //introduzindo o item atual na ultima posicao do array
    }
    //console.log(this.itens);
  }

  deleteItem(index: number, item: string){
    console.log(index, item);
    this.itens.splice(index, 1);
    console.log("Array Atual: "+this.itens);
  }
}
