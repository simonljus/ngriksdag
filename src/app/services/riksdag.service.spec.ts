import { TestBed } from '@angular/core/testing';

import { RiksdagService } from './riksdag.service';

describe('RiksdagService', () => {
  let service: RiksdagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiksdagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
