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
        image: `${this.path}/mochileros.jpg`,
        title: 'Mochileros',
        description: 'JOBS.TRABAJO2.DESCRIPCION',
        video: 'https://www.youtube.com/embed/gh2jDNJ1vkU',
        skills: ['Angular', 'TypeScript', 'JavaScript', 'AWS', 'Node js', 'Express', 'Mongo db', 'Jest', 'git'],
      },
      {
        image: `${this.path}/vuelos-sabre.png`,
        title: 'GDS Sabre',
        description: 'JOBS.TRABAJO3.DESCRIPCION',
        video: 'https://www.youtube.com/embed/xaXoLalub88',
        skills: ['Angular', 'git', 'TypeScript', 'JavaScript', 'Html/css', 'REST API', 'Node JS', 'Express', 'Jest'],
      },
      {
        image: `${this.path}/vuelos-sabre.png`,
        title: 'JOBS.TRABAJO4.TITULO',
        description: 'JOBS.TRABAJO4.DESCRIPCION',
        video: 'https://www.youtube.com/embed/BuumtaCafD8',
        skills: ['Angular', 'git', 'TypeScript', 'Responsive Design', 'Html/css',],
      },
    ]
  }
  transformUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
