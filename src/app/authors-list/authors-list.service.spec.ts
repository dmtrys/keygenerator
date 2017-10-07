import { TestBed, inject } from '@angular/core/testing';

import { AuthorsListService } from './authors-list.service';

describe('AuthorsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorsListService]
    });
  });

  it('should be created', inject([AuthorsListService], (service: AuthorsListService) => {
    expect(service).toBeTruthy();
  }));
});
