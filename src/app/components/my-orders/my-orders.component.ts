// my-orders.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../service/order/order.service'; 
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders: any[] = []; 

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe(
      (data) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error fetching orders', error);
      }
    );
  }

  editOrder(id: number) {
    this.router.navigate(['/add-order', id]);
  }

  confirmDelete(id: number) {
    const isConfirmed = confirm('Are you sure you want to delete this order?');
    if (isConfirmed) {
      this.orderService.deleteOrder(id.toString()).subscribe(
        () => {
          console.log('Order deleted successfully');
          this.loadOrders(); 
        },
        (error) => {
          console.error('Error deleting order', error);
        }
      );
    }
  }

  addOrder() {
    this.router.navigate(['/add-order']);
  }
}
