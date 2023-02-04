import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { HeaderContactComponent } from './components/header-contact/header-contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@/app/modules/shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent,
    FormContactComponent,
    HeaderContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
    TranslateModule
  ],
  exports:[
    ContactComponent,
    FormContactComponent,
    HeaderContactComponent
  ]
})
export class ContactModule { }
