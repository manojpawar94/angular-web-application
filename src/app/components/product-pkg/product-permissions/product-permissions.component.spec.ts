import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPermissionsComponent } from './product-permissions.component';

describe('ProductPermissionsComponent', () => {
  let component: ProductPermissionsComponent;
  let fixture: ComponentFixture<ProductPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
