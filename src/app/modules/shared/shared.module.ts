import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ValidateControlComponent } from '@/app/components/base-components/validate-control/validate-control.component';
import { LoadingBtnDirective } from './directives/loading-btn.directive';
import { TranslateModule } from '@ngx-translate/core';
import { ClickOutSideDirective } from './directives/click-out-side.directive';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { SkillsComponent } from './components/skills/skills.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ValidateControlComponent,
    LoadingBtnDirective,
    ClickOutSideDirective,
    SectionTitleComponent,
    SkillsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    TranslateModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ValidateControlComponent,
    LoadingBtnDirective,
    ClickOutSideDirective,
    SectionTitleComponent,
    SkillsComponent
  ]
})
export class SharedModule { }
