import { ListEverythingService } from './../../service/list-everything.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list-model',
  templateUrl: './list-model.component.html',
  styleUrls: ['./list-model.component.css']
})
export class ListModelComponent implements OnInit {
  itemShow: string;
  itemSelect = [];
  constructor(public activeModal: NgbActiveModal,
              private itensList: ListEverythingService) {
                this.itemSelect = itensList.getItens();
                this.itemShow = this.itemSelect[itensList.index];
                console.log(this.itemSelect);
              }

  ngOnInit() {
  }

}
