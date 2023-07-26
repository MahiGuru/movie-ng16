import { TestBed } from '@angular/core/testing';

import { SharedMenuDataService } from './shared-menu-data.service';

describe('SharedMenuDataService', () => {
  let service: SharedMenuDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedMenuDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
