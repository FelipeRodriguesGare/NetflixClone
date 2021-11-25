import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMainComponent } from './nav-bar-main.component';

describe('NavBarMainComponent', () => {
  let component: NavBarMainComponent;
  let fixture: ComponentFixture<NavBarMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
