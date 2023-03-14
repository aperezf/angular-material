import { Component } from '@angular/core';
import { AppState } from './store/app.reducer';
import { Store } from '@ngrx/store';
import { themeSelector } from './store/selectors/themes.selector';
import { Observable } from 'rxjs';
import { ThemeSelectorService } from './theme/services/theme-selector/theme-selector.service';
import { menuSelector } from './store/selectors/menu.selector';
import { MenuActions } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  themeName$: Observable<string>;
  menuList$: Observable<any>;


constructor(
  private store: Store<AppState>,
  private themeSelectorService: ThemeSelectorService
) {
  this.store.dispatch(MenuActions.loadMenu());
  this.themeName$ = this.store.select(themeSelector);
  this.menuList$ = this.store.select(menuSelector);
}

changeTheme(theme: any): void {
  this.themeSelectorService.changeTheme(theme);
}

toggleMenu(): void {}
}
