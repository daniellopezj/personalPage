import { JobsFormat } from '@/types/general.types';
import { Component, } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})

export class JobsComponent {
  private path = '../../../../../assets/jobs'
  public faAngleRight = faAngleRight
  public jobs: JobsFormat[] = [{
    image: `${this.path}/clone-idealista.webp`,
    title: 'JOBS.TRABAJO1.TITULO',
    description: 'JOBS.TRABAJO1.DESCRIPCION',
    link: 'https://clone-idealista.vercel.app/',
    skills: ['React', 'Next.js', 'git', 'TypeScript', 'Responsive Design', 'Html/css'],
  },
  {
    image: `${this.path}/portafolio.webp`,
    title: 'JOBS.TRABAJO4.TITULO',
    description: 'JOBS.TRABAJO4.DESCRIPCION',
    link: 'https://danidev-portafolio.netlify.app/',
    skills: ['Angular', 'git', 'TypeScript', 'Responsive Design', 'Html/css',],
  },
  {
    title: 'Mochileros',
    description: 'JOBS.TRABAJO2.DESCRIPCION',
    videoId: 'gh2jDNJ1vkU',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'AWS', 'Node js', 'Express', 'Mongo db', 'Jest', 'git'],
  },
  {
    title: 'GDS Sabre',
    description: 'JOBS.TRABAJO3.DESCRIPCION',
    videoId: 'xaXoLalub88',
    skills: ['Angular', 'git', 'TypeScript', 'JavaScript', 'Html/css', 'REST API', 'Node JS', 'Express', 'Jest'],
  }];
}
