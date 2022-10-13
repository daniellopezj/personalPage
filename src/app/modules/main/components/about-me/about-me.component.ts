import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  constructor() { }
  public technicalSkills = ['Angular', 'React', 'Vue','TypeScript','JavaScript', 'Cypress', 'Jest', 'Git', 'Node js', 'Express', 'AWS', 'Mongo db', 'Redux', 'Rxjs', 'Html/css', 'Responsive design']
  // public humanSkills =['SKILLS.ITEM3.HERRAMIENTA1','SKILLS.ITEM3.HERRAMIENTA3','SKILLS.ITEM3.HERRAMIENTA4','SKILLS.ITEM3.HERRAMIENTA5','SKILLS.ITEM3.HERRAMIENTA6','SKILLS.ITEM3.HERRAMIENTA7','SKILLS.ITEM3.HERRAMIENTA8','SKILLS.ITEM3.HERRAMIENTA9',]
}
