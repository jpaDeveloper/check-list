import { TestBed } from '@angular/core/testing';

import { ListEverythingService } from './list-everything.service';

describe('ListEverythingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListEverythingService = TestBed.get(ListEverythingService);
    expect(service).toBeTruthy();
  });
});
