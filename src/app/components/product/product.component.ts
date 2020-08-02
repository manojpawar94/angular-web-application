import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Data } from 'src/app/services/Data';
import { Product } from 'src/app/models/Product';
import { FakeService } from 'src/app/services/fake.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() new: boolean = true;

  productForm: FormGroup; //product form group

  constructor(private formBuilder: FormBuilder, private data: Data,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.new) {
      console.log('setting product form group for new product')
      this.initNewProductFG();
    } else {
      console.log('setting product form group for existing product')
      if (this.data.storage == null) {
        this.initNewProductFG();
        console.log('this.data.storage is null, navigating to the dashboard component')
        this.router.navigate(["../../../dashboard"], { relativeTo: this.route });
      }else{
        console.log('this.data.storage is present setting form group for existing product')
        this.initExistingProductFG();
      }
    }
  }

  initNewProductFG() {
    this.productForm = this.formBuilder.group({
      productName: ['', [Validators.required]],
      productDesc: [''],
      appId: ['', [Validators.required]],
      buildPattern: ['', [Validators.required]],
      devBuildLocator: ['', [Validators.required]],
      sitBuildLocator: ['', [Validators.required]],
      teamcityToken: ['', [Validators.required]],
      teamcityInstance: ['PROD', [Validators.required]]
    });
  }

  initExistingProductFG() {
    let product: Product = this.data.storage;
    this.productForm = this.formBuilder.group({
      productName: [product.productName, [Validators.required]],
      productDesc: [product.productDescription],
      appId: [product.appId, [Validators.required]],
      buildPattern: [product.buildPattern, [Validators.required]],
      devBuildLocator: [product.devBuildLocator, [Validators.required]],
      sitBuildLocator: [product.sitBuildLocator, [Validators.required]],
      teamcityToken: [product.buildToken, [Validators.required]],
      teamcityInstance: [product.buildInstance, [Validators.required]]
    });
  }

  save() {

  }
}
