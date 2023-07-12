import { TestBed } from '@angular/core/testing';

import { CheckVisitorService } from './check-visitor.service';

describe('CheckVisitorService', () => {
  let service: CheckVisitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckVisitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
