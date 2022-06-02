import { TestBed } from '@angular/core/testing';

import { FieldentryService } from './fieldentry.service';

describe('FieldentryService', () => {
  let service: FieldentryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldentryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
