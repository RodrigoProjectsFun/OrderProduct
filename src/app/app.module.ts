import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditOrderComponent } from './components/add-edit-orders/add-edit-orders.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductModalComponent } from './components/product-modal.component/product-modal.component.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditOrderComponent,
    MyOrdersComponent,
    ProductModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
