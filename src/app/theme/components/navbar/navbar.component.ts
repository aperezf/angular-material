import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuActions } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private store: Store<AppState>
  ) { }

  toggleSidenav(): void {
    this.store.dispatch(MenuActions.toggleMenu());
  }

}
