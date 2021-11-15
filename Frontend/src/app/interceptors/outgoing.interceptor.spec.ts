import { TestBed } from '@angular/core/testing';

import { OutgoingInterceptor } from './outgoing.interceptor';

describe('OutgoingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      OutgoingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: OutgoingInterceptor = TestBed.inject(OutgoingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
