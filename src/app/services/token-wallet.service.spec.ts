import { TestBed } from '@angular/core/testing';

import { TokenWalletService } from './token-wallet.service';

describe('TokenWalletService', () => {
  let service: TokenWalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenWalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
