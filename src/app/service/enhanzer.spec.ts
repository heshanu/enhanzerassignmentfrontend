import { TestBed } from '@angular/core/testing';

import { Enhanzer } from './enhanzer';

describe('Enhanzer', () => {
  let service: Enhanzer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Enhanzer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
