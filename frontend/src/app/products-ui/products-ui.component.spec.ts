import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUiComponent } from './products-ui.component';

describe('ProductsUiComponent', () => {
  let component: ProductsUiComponent;
  let fixture: ComponentFixture<ProductsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
