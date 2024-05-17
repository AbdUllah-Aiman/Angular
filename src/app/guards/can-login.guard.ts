import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account/account.service';

export const canLoginGuard: CanActivateFn = (route, state) => {
  let accountService = inject(AccountService);
  let router = inject(Router);
  if (accountService.isLogged) return true;
  else router.navigateByUrl('/login');
  return false;
};
