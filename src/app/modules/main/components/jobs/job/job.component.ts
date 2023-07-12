import { JobsFormat } from '@/types/general.types';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  @Input() public job: JobsFormat = {
    title: '',
    description: '',
    skills: [],
    videoId: undefined
  };

  public apiLoaded = false;

  constructor(@Inject(PLATFORM_ID) public platformId: Object) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.apiLoaded && this.job.videoId) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        this.apiLoaded = true;
      }
    }
  }

}
