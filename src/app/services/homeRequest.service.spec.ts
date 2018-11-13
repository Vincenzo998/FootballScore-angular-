/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { HomeRequestService } from './homeRequest.service';

describe('Service: HomeRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeRequestService]
    });
  });

  it('should ...', inject([HomeRequestService], (service: HomeRequestService) => {
    expect(service).toBeTruthy();
  }));
});
