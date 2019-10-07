import { TestBed } from '@angular/core/testing';

import { RfpDetailsService } from './rfp-details.service';

describe('RfpDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RfpDetailsService = TestBed.get(RfpDetailsService);
    expect(service).toBeTruthy();
  });
});
