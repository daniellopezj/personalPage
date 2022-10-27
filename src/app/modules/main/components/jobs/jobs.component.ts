import { Component } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
  private path = '../../../../../assets/jobs'
  public faAngleRight = faAngleRight
  public jobs = [
    {
      image: `${this.path}/asitur.png`,
      title: 'Asitur',
      description: 'JOBS.TRABAJO1.DESCRIPCION',
      video: 'https://www.youtube.com/embed/7QU1nvuxaMA',
      skills: ['Vue', 'git', 'TypeScript', 'Cypress', 'Pinia', 'IndexedBD', 'Rxjs'],
    },
    {
      image: `${this.path}/mochileros.jpg`,
      title: 'Mochileros',
      description: 'JOBS.TRABAJO2.DESCRIPCION',
      video: 'https://www.youtube.com/embed/IcrbM1l_BoI',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'AWS', 'Node js', 'Express', 'Mongo db', 'Jest', 'git'],
    },
    {
      image: `${this.path}/vuelos-sabre.png`,
      title: 'Vuelos sabre',
      description: 'JOBS.TRABAJO3.DESCRIPCION',
      video: 'https://www.youtube.com/embed/n4RjJKxsamQ',
      skills: ['Angular', 'git', 'TypeScript', 'JavaScript', 'Html/css', 'REST API', 'Node JS', 'Express', 'Jest'],
    },
    {
      image: `${this.path}/vuelos-sabre.png`,
      title: 'Pagina Personal',
      description: 'JOBS.TRABAJO4.DESCRIPCION',
      video: 'https://www.youtube.com/embed/WC5FdFlUcl0',
      skills: ['Angular', 'git', 'TypeScript', 'Responsive Design', 'Html/css',],
    },

  ]

  constructor(public sanitizer: DomSanitizer) { }

  transformUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
