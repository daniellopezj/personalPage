import { DeviceDetectorService } from 'ngx-device-detector';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckVisitorService {
  public isHuman = false;
  constructor(private deviceService: DeviceDetectorService) {
    this.isHumanVisitor()
  }

  public isHumanVisitor(): void {
    const userAgent = this.deviceService.getDeviceInfo().userAgent;
    const botsUserAgents = [
      'bot',
      'googlebot',
      'bingbot',
    ];
    for (const botUserAgent of botsUserAgents) {
      if (userAgent.toLowerCase().includes(botUserAgent)) {
        this.isHuman = false;
      }
    }
    this.isHuman = true;
  }
}
