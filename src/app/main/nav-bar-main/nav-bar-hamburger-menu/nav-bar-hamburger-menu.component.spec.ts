import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarHamburgerMenuComponent } from './nav-bar-hamburger-menu.component';

describe('NavBarHamburgerMenuComponent', () => {
  let component: NavBarHamburgerMenuComponent;
  let fixture: ComponentFixture<NavBarHamburgerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarHamburgerMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarHamburgerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
