import { TestBed } from '@angular/core/testing';

import { IstAuthenticatedGuard } from './ist-authenticated.guard';

describe('IstAuthenticatedGuard', () => {
  let guard: IstAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IstAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
