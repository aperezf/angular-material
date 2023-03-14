import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { menuSelector } from 'src/app/store/selectors/menu.selector';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  
  menuList$: Observable<any>;

  /**
   *
   */
  constructor(
    private store: Store<AppState>
  ) {
    this.menuList$ = this.store.select(menuSelector);

  }

}
