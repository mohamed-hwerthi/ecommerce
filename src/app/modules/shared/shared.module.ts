import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './select/select.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { FormsModule } from '@angular/forms';
import { share } from 'rxjs';
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    PageNotFoundComponent,
    ContactComponent,
    SelectComponent,
    InputNumberComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [
    HeaderComponent,
    SelectComponent,
    InputNumberComponent,
    SidebarComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
