import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FakeService } from 'src/app/services/fake.service';
import { MatDialog } from '@angular/material/dialog';
import { Confirmation } from 'src/app/models/Confirmation';

import { NotificationService } from 'src/app/services/notification.service';
import { Product } from 'src/app/models/Product';
import { Data } from 'src/app/services/Data';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //table heading 
  displayedColumns: string[] = ['productId', 'productName', 'productDescription', 'appName', 'action'];
  dataSource: MatTableDataSource<Product>; //data to be display in table

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _fake: FakeService,
    public dialog: MatDialog,
    private notifier: NotificationService,
    private data: Data) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this._fake.getProductData());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //to filter the product data
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openProduct(product) {
    this.data.storage = product;
    this.notifier.showNotification(`You have clicked on ${product.productName}`);
  }

  deleteProduct(product) {
    //creating confirmation payload object to pass dailog
    let confirmation: Confirmation = {
      action: 'Delete',
      title: 'Are you sure to Delete the Product?',
      message: `You are trying to delete "${product.productName}" Product. Once It is deleted, it can not be recovered.`,
      buttonColor: 'warn'
    }

    //opening dialong with reference to make descission
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '375px',
      data: confirmation
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Delete') {
        this.notifier.showNotification(`${product.productName} has confirm to delete`);
      } else {
        this.notifier.showNotification(`${product.productName} has deniy to delete`);
      }
    });

  }

}
