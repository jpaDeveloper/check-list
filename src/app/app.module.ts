import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './viows/list/list.component';
import { FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { ListModelComponent } from './viows/list-model/list-model.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListModelComponent
  ],
  entryComponents: [ListModelComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
