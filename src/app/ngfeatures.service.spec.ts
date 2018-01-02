import { TestBed, inject } from '@angular/core/testing';

import { NgfeaturesService } from './ngfeatures.service';

describe('NgfeaturesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgfeaturesService]
    });
  });

  it('should be created', inject([NgfeaturesService], (service: NgfeaturesService) => {
    expect(service).toBeTruthy();
  }));
});
