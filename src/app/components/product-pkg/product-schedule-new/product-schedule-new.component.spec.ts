import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductScheduleNewComponent } from './product-schedule-new.component';

describe('ProductScheduleNewComponent', () => {
  let component: ProductScheduleNewComponent;
  let fixture: ComponentFixture<ProductScheduleNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductScheduleNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductScheduleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
