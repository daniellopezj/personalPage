import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
interface JobsFormat {
  title: string;
  description: string;
  image?: string;
  video?: string;
  videoId?: string;
  link?: string;
  skills: string[],
}
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})

export class JobsComponent implements OnInit {
  private path = '../../../../../assets/jobs'
  public faAngleRight = faAngleRight
  public jobs: JobsFormat[] = [];

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.jobs = [
      {
        image: `${this.path}/clone-idealista.webp`,
        title: 'JOBS.TRABAJO1.TITULO',
        description: 'JOBS.TRABAJO1.DESCRIPCION',
        link:'https://clone-idealista.vercel.app/',
        skills: ['React', 'Next.js', 'git', 'TypeScript', 'Responsive Design', 'Html/css'],
      },
      {
        image: `${this.path}/portafolio.webp`,
        title: 'JOBS.TRABAJO4.TITULO',
        description: 'JOBS.TRABAJO4.DESCRIPCION',
        link:'https://danidev-portafolio.netlify.app/',
        skills: ['Angular', 'git', 'TypeScript', 'Responsive Design', 'Html/css',],
      },
      {
        title: 'Mochileros',
        description: 'JOBS.TRABAJO2.DESCRIPCION',
        video: 'https://www.youtube.com/embed/gh2jDNJ1vkU',
        videoId: 'gh2jDNJ1vkU',
        skills: ['Angular', 'TypeScript', 'JavaScript', 'AWS', 'Node js', 'Express', 'Mongo db', 'Jest', 'git'],
      },
      {
        title: 'GDS Sabre',
        description: 'JOBS.TRABAJO3.DESCRIPCION',
        video: 'https://www.youtube.com/embed/xaXoLalub88',
        videoId: 'xaXoLalub88',
        skills: ['Angular', 'git', 'TypeScript', 'JavaScript', 'Html/css', 'REST API', 'Node JS', 'Express', 'Jest'],
      },
    ]
  }
}
