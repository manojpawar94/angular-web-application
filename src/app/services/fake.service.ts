import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { DeployScheduleTxn } from '../models/DeployScheduleTxn';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor() { }

  getProductData(): Product[] {
    return [
      {
        productId: '1',
        productName: 'Product One',
        productDescription: 'Sample test product',
        appId: '12',
        appName: 'Test APP',
        buildPattern: 'build.pattern',
        devBuildLocator: 'dev.build.locator',
        sitBuildLocator: 'sit.build.locator',
        buildToken: 'sample.token',
        buildInstance: 'PROD'
      },
      {
        productId: '2',
        productName: 'Jupiter Notebook',
        productDescription: 'Sample Jupiter test product',
        appId: '13',
        appName: 'Test APP1',
        buildPattern: 'build.pattern',
        devBuildLocator: 'dev.build.locator',
        sitBuildLocator: 'sit.build.locator',
        buildToken: 'sample.token',
        buildInstance: 'PROD'
      },
      {
        productId: '3',
        productName: 'Eclipse IDE',
        productDescription: 'Eclipse test product',
        appId: '13',
        appName: 'Test APP1',
        buildPattern: 'build.pattern',
        devBuildLocator: 'dev.build.locator',
        sitBuildLocator: 'sit.build.locator',
        buildToken: 'sample.token',
        buildInstance: 'PROD'
      },
      {
        productId: '4',
        productName: 'Macbook',
        productDescription: 'Macbook test product',
        appId: '12',
        appName: 'Test APP',
        buildPattern: 'build.pattern',
        devBuildLocator: 'dev.build.locator',
        sitBuildLocator: 'sit.build.locator',
        buildToken: 'sample.token',
        buildInstance: 'PROD'
      },
      {
        productId: '5',
        productName: 'Dell Laptop',
        productDescription: 'Sample test product',
        appId: '12',
        appName: 'Test APP',
        buildPattern: 'build.pattern',
        devBuildLocator: 'dev.build.locator',
        sitBuildLocator: 'sit.build.locator',
        buildToken: 'sample.token',
        buildInstance: 'PROD'
      },
      {
        productId: '6',
        productName: 'Iphone Max',
        productDescription: 'Sample test product',
        appId: '12',
        appName: 'Test APP',
        buildPattern: 'build.pattern',
        devBuildLocator: 'dev.build.locator',
        sitBuildLocator: 'sit.build.locator',
        buildToken: 'sample.token',
        buildInstance: 'PROD'
      },
      {
        productId: '7',
        productName: 'Cocacola',
        productDescription: 'Sample test product',
        appId: '12',
        appName: 'Test APP',
        buildPattern: 'build.pattern',
        devBuildLocator: 'dev.build.locator',
        sitBuildLocator: 'sit.build.locator',
        buildToken: 'sample.token',
        buildInstance: 'PROD'
      },
      {
        productId: '8',
        productName: 'JioFi',
        productDescription: 'Sample test product',
        appId: '12',
        appName: 'Test APP',
        buildPattern: 'build.pattern',
        devBuildLocator: 'dev.build.locator',
        sitBuildLocator: 'sit.build.locator',
        buildToken: 'sample.token',
        buildInstance: 'PROD'
      }
    ]
  }

  getListOfHistory(): DeployScheduleTxn[]{
   return [{
    scheduleId: '1',
    releaseName: 'Test_Release_1',
    releaseDesc: 'This sample release with no build details',
    buildName: 'build.name.1',
    tagName: 'build.tag.1',
    sitApporval: 'mp19250',
    username: 'mp19250',
    linux: 'testpassword',
    status: 'Completed',
    active: false
   },
   {
    scheduleId: '2',
    releaseName: 'Test_Release_2',
    releaseDesc: 'This sample release with no build details',
    buildName: 'build.name.2',
    tagName: 'build.tag.2',
    sitApporval: 'mp19250',
    username: 'mp19250',
    linux: 'testpassword',
    status: 'Completed',
    active: false
   }];
  }
}
