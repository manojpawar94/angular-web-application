import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Data } from 'src/app/services/Data';



@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  
  //sidebar parameters
  fixedTopGap = 0; //sidebar margin from top
  fixedBottomGap = 0; //sidebar margin from bottom
  fixedInViewport = false; //sidebar should fullscreen

  // sidebar list parameters
  sidebarActionlinks = [
    { title : 'Details', icon: 'web', path : './details', data : ''},
    { title : 'Schedule New', icon: 'schedule', path : './new', data : ''},
    { title : 'Check Status', icon: 'receipt', path : './scheduled', data : ''},
    { title : 'Permission', icon: 'lock', path : './permission', data : ''}
  ];
  
  //input product 
  product: Product;

  constructor(private data: Data) { }

  ngOnInit(): void {
    this.product = this.data.storage;
    console.log(JSON.stringify(this.product));
  }

}
