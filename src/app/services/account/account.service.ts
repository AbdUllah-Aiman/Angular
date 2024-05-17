import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  isLogged = false;
  constructor() {}
  login(name: string, password: string) {
    if (name.toLowerCase() == 'admin' && password == '123a')
      this.isLogged = true;
    return this.isLogged;
  }
}
