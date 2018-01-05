import { TestBed, inject } from '@angular/core/testing';

import { AuthGroudService } from './auth-groud.service';

describe('AuthGroudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGroudService]
    });
  });

  it('should be created', inject([AuthGroudService], (service: AuthGroudService) => {
    expect(service).toBeTruthy();
  }));
});
