import { TestBed } from '@angular/core/testing';

import { WindowScrollService } from './window-scroll.service';

describe('WindowScrollService', () => {
  let service: WindowScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
