import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  private path = '../../../../../assets/jobs'
  public faAngleRight = faAngleRight
  public jobs: any;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.jobs = [
      {
        image: `${this.path}/asitur.png`,
        title: 'Asitur',
        description: 'JOBS.TRABAJO1.DESCRIPCION',
        video: 'https://www.loom.com/embed/d029aaf8af38456881b7a612ed444411',
        skills: ['Vue', 'git', 'TypeScript', 'Cypress', 'Pinia', 'IndexedBD', 'Rxjs'],
      },
      {
        image: `${this.path}/mochileros.jpg`,
        title: 'Mochileros',
        description: 'JOBS.TRABAJO2.DESCRIPCION',
        video: 'https://www.loom.com/embed/5792cc0a0372412fa0a4686594b188cc',
        skills: ['Angular', 'TypeScript', 'JavaScript', 'AWS', 'Node js', 'Express', 'Mongo db', 'Jest', 'git'],
      },
      {
        image: `${this.path}/vuelos-sabre.png`,
        title: 'GDS Sabre',
        description: 'JOBS.TRABAJO3.DESCRIPCION',
        video: 'https://www.loom.com/embed/8779a373d998472c923e4211ff2e111e',
        skills: ['Angular', 'git', 'TypeScript', 'JavaScript', 'Html/css', 'REST API', 'Node JS', 'Express', 'Jest'],
      },
      {
        image: `${this.path}/vuelos-sabre.png`,
        title: 'Pagina Personal',
        description: 'JOBS.TRABAJO4.DESCRIPCION',
        video: 'https://www.loom.com/embed/e6d8e206cba3425491ca5f387eff31a1',
        skills: ['Angular', 'git', 'TypeScript', 'Responsive Design', 'Html/css',],
      },
    ]
  }
  transformUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
