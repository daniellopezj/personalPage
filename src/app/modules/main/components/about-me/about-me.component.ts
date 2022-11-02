import { SharedService } from '@/app/services/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  public technicalSkills = ['Angular', 'React', 'Vue', 'TypeScript', 'JavaScript', 'Cypress', 'Jest', 'Git', 'Node js', 'Express', 'AWS', 'Mongo db', 'Redux', 'Rxjs', 'Html/css', 'Responsive design']

  constructor(private sharedService: SharedService) { }

  goTo(route: string) {
    this.sharedService.goToSection(route)
  }
}
