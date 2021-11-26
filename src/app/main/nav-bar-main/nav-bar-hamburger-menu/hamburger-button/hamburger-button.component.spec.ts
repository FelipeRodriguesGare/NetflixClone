import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerButtonComponent } from './hamburger-button.component';

describe('HamburgerButtonComponent', () => {
  let component: HamburgerButtonComponent;
  let fixture: ComponentFixture<HamburgerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburgerButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
