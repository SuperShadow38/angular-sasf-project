import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../core/services/products/products.service';

import { Product } from './../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products: Product[] = [];
  product: Product;
  
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.fetchProduct(id);
    });
  
    this.fetchAllProducts(); 
  }
  
  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  

  fetchAllProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: 13,
      name: "Fabio Ávila",
      username: "fabinho",
      email: "fabinho@gmail.com",
      address: {
        street: "9 de octubre",
        suite: "Depto. 3",
        city: "Guayaquil",
        zipcode: "92998-3872",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "593 23 231 2344",
      website: "hildegard.org",
      company: {
        name: "Sudamericana de Software",
        catchPhrase: "software engineer in-training",
        bs: "harness real-time e-markets"
      }
    };

    this.productsService.createProduct(newProduct).subscribe((product) => {
      const newProductData = product as Product; // Casting explícito a tipo Product
      this.products.push(newProductData);
      this.fetchAllProducts();
      console.log(newProductData); // Obtener nuevamente todos los productos después de crear uno nuevo
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      name: "Danna Muñoz",
      username: "Donna"
    };
    this.productsService.updateProduct('2',updateProduct).subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('10').subscribe(rta => {
      console.log(rta);
    });
  }
}