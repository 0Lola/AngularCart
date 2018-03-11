import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { MainComponent } from './main.component';
import { MainRouting } from './main.routing';
import { OrderComponent } from './order/order.component';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    FormsModule
  ],
  declarations: [
    MainComponent,
    OrderComponent
  ]
})

export class MainModule { }
