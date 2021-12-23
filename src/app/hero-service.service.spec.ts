import { TestBed } from '@angular/core/testing';

import { HeroServiceService } from './hero-service.service';

describe('HeroServiceService', () => {
  let service: HeroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
