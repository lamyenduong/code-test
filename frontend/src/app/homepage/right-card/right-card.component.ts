import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/models/cart';
import { Shoes } from 'src/models/shoes';
import { CartService } from 'src/services/cart.service';
import { DataService } from 'src/services/data.service';
import { ShoesService } from 'src/services/shoes.service';

@Component({
  selector: 'app-right-card',
  templateUrl: './right-card.component.html',
  styleUrls: ['./right-card.component.scss']
})
export class RightCardComponent implements OnInit {
  shoes_id!: number
  shoeses: Shoes[] = []
  cartItems!: Cart[]

  constructor(
    private shoesService: ShoesService,
    private dataService: DataService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  increaseQuantity(id: number) {
  }

  decreaseQuantity(id: number) {
  }

  removeCart(id: number) {
    const index = this.shoeses.findIndex(item => item.id === id);
    if (index !== -1) {
      this.shoeses.splice(index, 1); // Xóa sản phẩm khỏi mảng hiển thị ngay lập tức
    }
    this.cartService.deleteCart(id).subscribe(() => this.loadCartItems())
  }

  loadCartItems() {
    this.cartService.getCart().subscribe((items: Cart[]) => {
      this.cartItems = items;
      console.log('Cart Items:', items);

      items.forEach((cartItem: Cart) => {
        this.shoesService.getProductById(cartItem.product_id).subscribe((product: Shoes) => {
          this.shoeses.push(product);
        });
      });
    });
  }
}
