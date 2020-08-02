import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { ProductDetailsComponent } from './components/product-pkg/product-details/product-details.component';
import { ProductScheduleNewComponent } from './components/product-pkg/product-schedule-new/product-schedule-new.component';
import { ProductScheduleComponent } from './components/product-pkg/product-schedule/product-schedule.component';
import { ProductPermissionsComponent } from './components/product-pkg/product-permissions/product-permissions.component';
import { ProductHomeComponent } from './components/product-pkg/product-home/product-home.component';


const routes: Routes = [
  { path: '', component: LoginComponent, outlet: 'primary' },
  {
    path: 'devops', component: AppHomeComponent, outlet: 'primary',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: HomeComponent },
      {
        path: 'product/:id', component: ProductHomeComponent,
        children: [
          { path: '', redirectTo: 'details', pathMatch: 'full' },
          { path: 'details', component: ProductDetailsComponent },
          { path: 'new', component: ProductScheduleNewComponent },
          { path: 'scheduled', component: ProductScheduleComponent },
          { path: 'permission', component: ProductPermissionsComponent }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
router.navigate([{outlets: {primary: 'path' ,sidebar: 'path'}}]);
Or also using the routerLink directive


<a [routerLink]="[{ outlets: { primary: ['path'],sidebar: ['path'] } }]">
    Products List
</a>
*/
