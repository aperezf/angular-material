import { Component } from '@angular/core';
import { AppState } from './store/app.reducer';
import { Store } from '@ngrx/store';
import { themeSelector } from './store/selectors/themes.selector';
import { Observable } from 'rxjs';
import { ThemeSelectorService } from './theme/services/theme-selector/theme-selector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  themeName$: Observable<string>;
  menuItems = [
    { name: 'Inicio', icon: 'home', route: '/' },
    {
      name: 'Nivel 1',
      icon: 'subdirectory_arrow_right',
      children: [
        { name: 'Subnivel 1', route: '/subnivel1' },
        { name: 'Subnivel 2', route: '/subnivel2' },
      ],
    },
  ];

  constructor(
    private store: Store<AppState>,
    private themeSelectorService: ThemeSelectorService
  ) {
    this.themeName$ = this.store.select(themeSelector);
  }

  changeTheme(theme: any): void {
    this.themeSelectorService.changeTheme(theme);
  }

  toggleMenu(): void {}
}
