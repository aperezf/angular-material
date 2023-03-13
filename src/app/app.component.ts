import { Component } from '@angular/core';
import { AppState } from './store/app.reducer';
import { Store } from '@ngrx/store';
import { themeSelector } from './store/selectors/themes.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select(themeSelector).subscribe((name) => console.log(name));
  }

}
