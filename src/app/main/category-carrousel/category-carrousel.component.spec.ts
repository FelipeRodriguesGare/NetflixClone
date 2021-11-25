import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCarrouselComponent } from './category-carrousel.component';

describe('CategoryCarrouselComponent', () => {
  let component: CategoryCarrouselComponent;
  let fixture: ComponentFixture<CategoryCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCarrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
