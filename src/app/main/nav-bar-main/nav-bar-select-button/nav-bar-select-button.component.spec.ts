import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSelectButtonComponent } from './nav-bar-select-button.component';

describe('NavBarSelectButtonComponent', () => {
  let component: NavBarSelectButtonComponent;
  let fixture: ComponentFixture<NavBarSelectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarSelectButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSelectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
