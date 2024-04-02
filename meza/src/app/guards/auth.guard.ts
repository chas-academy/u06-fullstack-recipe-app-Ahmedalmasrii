import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router: Router = inject(Router);
  let tokenExist: boolean = false;

  authService.getTokenState().subscribe((hasToken) => {
    tokenExist = hasToken;
  });
  if (tokenExist) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
