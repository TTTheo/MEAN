import { TestBed } from '@angular/core/testing';

import { CrashService } from './crash.service';

describe('CrashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrashService = TestBed.get(CrashService);
    expect(service).toBeTruthy();
  });
});
