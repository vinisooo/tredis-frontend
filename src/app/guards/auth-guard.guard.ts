import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../pages/page-login/services/login-services.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService: LoginService = inject(LoginService);

  return !!localStorage.getItem("token");
};
