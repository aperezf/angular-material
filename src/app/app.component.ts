import { Component } from '@angular/core';
import { AppState } from './store/app.reducer';
import { Store } from '@ngrx/store';
import { themeSelector } from './store/selectors/themes.selector';
import { Observable } from 'rxjs';
import { ThemeSelectorService } from './theme/services/theme-selector/theme-selector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  themeName$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private themeSelectorService: ThemeSelectorService
  ) {
    this.themeName$ = this.store.select(themeSelector);
  }

  changeTheme(theme: any): void {
    this.themeSelectorService.changeTheme(theme);
  }

}
