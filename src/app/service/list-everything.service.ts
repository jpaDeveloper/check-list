import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListEverythingService {
  itensList = [];
  index: number;
  constructor() { }
  getItens(){
    return this.itensList;
  }
  addItens(index: number, item: string){
    this.itensList[index] = item;
  }
  deleteItem(index: number){
    this.itensList.splice(index, 1);
  }
  alterItem(index: number, item: string){

  }
  modalIndex(index: number){
    this.index = index;
  }

}
