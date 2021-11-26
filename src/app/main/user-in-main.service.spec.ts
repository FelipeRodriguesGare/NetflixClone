import { TestBed } from '@angular/core/testing';

import { UserInMainService } from './user-in-main.service';

describe('UserInMainService', () => {
  let service: UserInMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
