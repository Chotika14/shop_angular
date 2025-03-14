import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-pageproduct',
  templateUrl: './pageproduct.component.html',
  styleUrls: ['./pageproduct.component.scss']
})

export class PageproductComponent implements OnInit {
[x: string]: any;
 
  cartItems: any[] = [];
  quantity: number = 1; // จำนวนสินค้าเริ่มต้น

  productId: string = ''
  productName: string = ''
  product: any; // สร้างตัวแปรเพื่อเก็บข้อมูลผลิตภัณฑ์
  filteredArray: any;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { 
    this.route.params.subscribe(param => {
      // console.log("🚀 ~ ProductDetailsComponent ~ param:", param)
      this.productId = param['id']
      this.productName = param['name']
    })
  
  }
  
    ngOnInit(): void {
    console.log("product parameter => ",this.productId,this.productName)
    
  
    this.product = this.productService.getProductById(+this.productId)
    console.log("🚀 ~ ProductDetailsComponent ~ ngOnInit ~ product:", this.product)
  }
  addToCart(product: any, quantity: number) {
    const item = { ...product, quantity }; // สร้างตัวแปร item จากสินค้าและจำนวนที่เลือก
    this.cartItems.push(item); // เพิ่มสินค้าลงในตะกร้า
  }
  
  } 

