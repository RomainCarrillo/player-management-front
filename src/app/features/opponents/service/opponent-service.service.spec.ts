import { TestBed } from '@angular/core/testing';

import { OpponentServiceService } from './opponent-service.service';

describe('OpponentServiceService', () => {
  let service: OpponentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpponentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
