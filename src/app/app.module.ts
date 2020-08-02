import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgMaterialModule } from './modules/ng-material/ng-material.module';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { ProductDetailsComponent } from './components/product-pkg/product-details/product-details.component';
import { ProductScheduleComponent } from './components/product-pkg/product-schedule/product-schedule.component';
import { ProductScheduleNewComponent } from './components/product-pkg/product-schedule-new/product-schedule-new.component';
import { ProductPermissionsComponent } from './components/product-pkg/product-permissions/product-permissions.component';
import { AppBarComponent } from './components/shared/app-bar/app-bar.component';
import { PopupWindowComponent } from './components/shared/popup-window/popup-window.component';
import { ProductComponent } from './components/product/product.component';
import { BuildProgressComponent } from './components/product-pkg/build-progress/build-progress.component';
import { BuildConsoleComponent } from './components/product-pkg/build-console/build-console.component';
import { ProductHomeComponent } from './components/product-pkg/product-home/product-home.component';
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';
import { ProductSidebarComponent } from './components/shared/product-sidebar/product-sidebar.component';
import { ModalWindowComponent } from './components/shared/modal-window/modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppBarComponent,
    PopupWindowComponent,
    HomeComponent,
    ProductComponent,
    BuildProgressComponent,
    BuildConsoleComponent,
    ProductHomeComponent,
    ProductListComponent,
    AppHomeComponent,
    ConfirmationDialogComponent,
    ProductSidebarComponent,
    ProductDetailsComponent,
    ProductScheduleComponent,
    ProductScheduleNewComponent,
    ProductPermissionsComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
  bootstrap: [AppComponent]
})
export class AppModule { }
