import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectorService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  changeTheme(theme: string): void {
    if (theme == 'light') {
      this.document.documentElement.classList.remove('dark-theme');
    }
    else if (theme == 'dark') {
      this.document.documentElement.classList.add('dark-theme');
    }
  }
}
