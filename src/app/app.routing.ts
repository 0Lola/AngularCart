import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const AppRoutes: Routes = [
  { path:'',redirectTo:'main',pathMatch:'full' },
  { path:'main',loadChildren:'./main/main.module#MainModule'}
];

export const AppRouting = RouterModule.forRoot(AppRoutes);
