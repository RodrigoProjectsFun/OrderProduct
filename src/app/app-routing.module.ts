import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersComponent } from './components/my-orders/my-orders.component'; 
import { AddEditOrderComponent } from './components/add-edit-orders/add-edit-orders.component';

const routes: Routes = [
  { path: 'my-orders', component: MyOrdersComponent },
 
  { path: '', redirectTo: '/my-orders', pathMatch: 'full' },
  { path: 'add-order', component: AddEditOrderComponent },
  { path: 'add-order/:id', component: AddEditOrderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
