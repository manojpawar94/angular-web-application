import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildConsoleComponent } from './build-console.component';

describe('BuildConsoleComponent', () => {
  let component: BuildConsoleComponent;
  let fixture: ComponentFixture<BuildConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
