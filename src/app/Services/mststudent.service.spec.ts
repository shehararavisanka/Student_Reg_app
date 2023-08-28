import { TestBed } from '@angular/core/testing';

import { MststudentService } from './mststudent.service';

describe('MststudentService', () => {
  let service: MststudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MststudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
