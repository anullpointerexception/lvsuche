import { TestBed } from '@angular/core/testing';

import { ResultDataService } from './resultdataservice';

describe('ResultdataserviceService', () => {
  let service: ResultDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
