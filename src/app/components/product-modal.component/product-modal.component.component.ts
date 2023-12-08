import { Component,Inject } from '@angular/core';
import { product } from '../../models/product';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-modal.component',
  templateUrl: './product-modal.component.component.html',
  styleUrl: './product-modal.component.component.css'
})
export class ProductModalComponent {
  updatedProduct: product; 

  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: product
  ) {
    this.updatedProduct = { ...data };
  }

  onNoClick(): void {
    this.dialogRef.close(); 
  }

  onSaveClick(): void {
    this.dialogRef.close(this.updatedProduct);
  }
}