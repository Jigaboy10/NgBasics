import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// -------------------------------------------------------------
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';

import { DataBindingRoutingModule } from '../features/data-binding/data-binding-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule, 
   
    DataBindingRoutingModule

    
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    
  ]
})
export class CoreModule { }
