import { Component } from '@angular/core';
import { AppState } from './store/app.reducer';
import { Store } from '@ngrx/store';
import { themeSelector } from './store/selectors/themes.selector';
import { Observable } from 'rxjs';
import { ThemeSelectorService } from './theme/services/theme-selector/theme-selector.service';
import { menuSelector, menuToggleSelector } from './store/selectors/menu.selector';
import { MenuActions } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {



}
