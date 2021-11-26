import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStaticComponent } from './main-static.component';

describe('MainStaticComponent', () => {
  let component: MainStaticComponent;
  let fixture: ComponentFixture<MainStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
