import { JobsFormat } from '@/types/general.types';
import { Component, Input, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { CheckVisitorService } from '@/app/services/check-visitor.service';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  @Input() public job: JobsFormat = {
    index: 0,
    title: '',
    description: '',
    skills: [],
    videoId: undefined
  };


  public apiLoaded = false;
  public idPlayer = ''
  constructor(private youtubeService: YoutubeService, private visitorService: CheckVisitorService) {
  }

  ngOnInit() {
    if (this.visitorService.isHuman && this.job.videoId) {
      this.idPlayer = `youtube-player${this.job.index}`
      this.youtubeService.initPlayer(this.idPlayer, this.job.videoId)
    }
  }
}
