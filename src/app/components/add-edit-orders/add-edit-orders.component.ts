import { Component, OnInit,Renderer2 } from '@angular/core';
import { order, Product } from '../../models/orders';
import { product } from '../../models/product';
import { ProductService } from '../../service/product/product.service';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { ProductModalComponent } from '../product-modal.component/product-modal.component.component';
declare var bootstrap: any;

@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-orders.component.html',
  styleUrls: ['./add-edit-orders.component.css']
})
export class AddEditOrderComponent implements OnInit {
  order: order = {
    orderNumber: '', 
    date: new Date().toISOString().split('T')[0], 
    products: [], 
    productCount: 0, 
    finalPrice: 0, 
  };
  selectedProduct: product = {
    id: '',
    name: '',
    unitPrice: 0,
    quantity: 0
  };

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private renderer: Renderer2

  ) {}

  ngOnInit() {
    this.initializeNewOrder();
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(()=>
    {const modalElement = this.renderer.selectRootElement('#productModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show(); }).catch((error) => {
      console.error('Error loading Bootstrap:', error);
    });
  }

  initializeNewOrder() {
    this.productService.getProducts().subscribe(products => {
      this.order = {
        orderNumber: '',
        date: new Date().toISOString().split('T')[0],
        products: products.map(product => ({ ...product, quantity: 0 })),
        productCount: 0,
        finalPrice: 0
      };
    }, error => {
      console.error('Error fetching products:', error);
    });
  }

  openProductModal(product: product): void {
    this.selectedProduct = product;

    const dialogRef = this.dialog.open(ProductModalComponent, {
      width: '400px', 
      data: this.selectedProduct 
    });

    dialogRef.afterClosed().subscribe(updatedProduct => {
      if (updatedProduct) {
        this.selectedProduct = updatedProduct;
        this.updateProductQuantity();
      }
    });
  }

  updateProductQuantity(): void {
    const productIndex = this.order.products.findIndex(p => p.id === this.selectedProduct.id);
    if (productIndex !== -1) {
      this.order.products[productIndex].quantity = this.selectedProduct.quantity;
    }
    this.updateOrderSummary();
  }

  updateOrderSummary(): void {
    this.order.productCount = this.order.products.reduce((sum, product) => sum + product.quantity, 0);
    this.order.finalPrice = this.order.products.reduce((sum, product) => sum + (product.unitPrice * product.quantity), 0);
  }
}
