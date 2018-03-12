import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { OrderComponent } from './order/order.component';

const MainRoutes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full'},
  { path: '', component: OrderComponent, pathMatch: 'full'}

];

export const MainRouting = RouterModule.forChild(MainRoutes);
