import { Injectable } from '@angular/core';
import { JWToken } from '../models/auth.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(): Observable<JWToken> {
    return of(new JWToken('asdfg', 'bearer'));
  }
}
