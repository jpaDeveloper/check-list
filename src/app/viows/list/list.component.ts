import { ListEverythingService } from './../../service/list-everything.service';

import { Component, OnInit } from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ListModelComponent } from '../list-model/list-model.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 itens = [];
 next = 0; //tamanho do array
 progress = 0;


  constructor(private modalService: NgbModal,
              private itensList: ListEverythingService) {
              this.itens = itensList.getItens();
  }

  ngOnInit() {
  }

  addItem(item: string){
    if(this.progress < 30){
    this.next = this.itens.length;
    this.itensList.addItens(this.next, item);//introduzindo o item atual na ultima posicao do arrays
    this.progress++;
    }else alert("Você chegou ao limite da lista (30 itens)!");
  }

  deleteItem(index: number){
    this.itensList.deleteItem(index);
    this.progress--;
  }

  open(index: number, item: string) {
    this.itensList.modalIndex(index);
    const modalRef = this.modalService.open(ListModelComponent);
  }
  
}
