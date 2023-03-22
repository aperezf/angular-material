import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { MaterialModule } from '../material/material.module';
import { ThemeModule } from '../theme/theme.module';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ThemeModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
