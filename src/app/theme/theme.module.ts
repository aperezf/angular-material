import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeNamePipe } from './pipes/theme-name/theme-name.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ThemeNamePipe,
    NavbarComponent,
    SidenavComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidenavComponent
  ]
})
export class ThemeModule { }
