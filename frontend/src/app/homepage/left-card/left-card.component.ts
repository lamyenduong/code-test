import { Shoes } from 'src/models/shoes';
import { ShoesService } from './../../../services/shoes.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { CartService } from 'src/services/cart.service';
import { Cart } from 'src/models/cart';

@Component({
  selector: 'app-left-card',
  templateUrl: './left-card.component.html',
  styleUrls: ['./left-card.component.scss']
})
export class LeftCardComponent implements OnInit {
  shoes!: Shoes[]
  cart!: Cart
  quantity: number = 1

  constructor(
    private shoesService: ShoesService,
    private dataService: DataService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.shoesService.getAllProducts().subscribe((products: Shoes[]) => this.shoes = products)
  }

  addToCart(id: number) {
    this.cartService.addToCart(id, this.quantity).subscribe((cart: Cart) => {
      this.cart = cart
      console.log('Product added to cart:', cart)
    })
  }
}
