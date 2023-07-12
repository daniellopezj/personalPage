import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CheckVisitorService } from '@/app/services/check-visitor.service';
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {
  private youtubePlayer: YT.Player | null = null;
  private apiReady = false;
  constructor(@Inject(PLATFORM_ID) public platformId: Object, private visitorService: CheckVisitorService) {
    if (this.visitorService.isHuman) {
      if (isPlatformBrowser(this.platformId)) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
      }
    }
  }

  initPlayer(elementId: string, videoId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.apiReady) {
        this.createPlayer(elementId, videoId);
      } else {
        const previousOnYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (previousOnYouTubeIframeAPIReady) {
            previousOnYouTubeIframeAPIReady();
          }
          this.apiReady = true;
          this.createPlayer(elementId, videoId);
        };
      }
    }
  }

  private createPlayer(elementId: string, videoId: string): void {
    this.youtubePlayer = new YT.Player(elementId, {
      videoId: videoId,
      events: {
        'onReady': this.onPlayerReady.bind(this),
        'onStateChange': this.onPlayerStateChange.bind(this)
      }
    });
  }
  private onPlayerReady(event: YT.PlayerEvent): void {
    this.sendMessageToPlayer('Player is ready');
  }

  private onPlayerStateChange(event: YT.OnStateChangeEvent): void {
    this.sendMessageToPlayer(`Player state changed: ${event.data}`);
  }

  private sendMessageToPlayer(message: string): void {
    if (this.youtubePlayer && this.youtubePlayer.getIframe()) {
      const iframeWindow = this.youtubePlayer.getIframe().contentWindow;
      if (iframeWindow) {
        setTimeout(() => {
          iframeWindow.postMessage(message, '*');
        }, 0);
      }
    }
  }
}
