import { TestBed } from '@angular/core/testing';

import { CountryPackageDetailsService } from './country-package-details.service';

describe('CountryPackageDetailsService', () => {
  let service: CountryPackageDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryPackageDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
