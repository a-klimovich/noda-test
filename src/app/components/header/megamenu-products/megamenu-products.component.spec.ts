import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegamenuProductsComponent } from './megamenu-products.component';

describe('MegamenuProductsComponent', () => {
  let component: MegamenuProductsComponent;
  let fixture: ComponentFixture<MegamenuProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MegamenuProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MegamenuProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
