import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuActions } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';
import { menuToggleSelector } from 'src/app/store/selectors/menu.selector';
import { ThemeSelectorService } from 'src/app/theme/services/theme-selector/theme-selector.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  
  opened$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private themeSelectorService: ThemeSelectorService
  ) {
    this.store.dispatch(MenuActions.loadMenu());
    this.opened$ = this.store.select(menuToggleSelector);
  }

  changeTheme(theme: any): void {
    this.themeSelectorService.changeTheme(theme);
  }

  toggleMenu(): void { }
}
