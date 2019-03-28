import { TestBed } from '@angular/core/testing';

import { JsonLoadService } from './json-load.service';

describe('JsonLoadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonLoadService = TestBed.get(JsonLoadService);
    expect(service).toBeTruthy();
  });
});
