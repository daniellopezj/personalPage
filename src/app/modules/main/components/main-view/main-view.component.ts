import { SharedService } from '@/app/services/shared.service';
import { Component } from '@angular/core';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {

  public controls = [
    {
      icon: faLinkedinIn,
      name: 'linkedIn',
      link: 'https://linkedin.com/in/dani-dev/'
    },
    {
      icon: faGithub,
      name: 'hithub',
      link: 'https://github.com/daniellopezj'
    },
    {
      icon: faTwitter,
      name: 'twitter',
      link: 'https://twitter.com/ldanidev'
    },
  ]

  constructor(private sharedService: SharedService) { }

  goTo(route: string) {
    this.sharedService.goToSection(route)
  }

}
