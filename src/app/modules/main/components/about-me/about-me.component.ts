import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  constructor() { }
  public technicalSkills = ['Angular', 'React', 'Vue', 'Cypress', 'Jest', 'Git', 'Node js', 'Express', 'AWS', 'Mongo db', 'Mysql', 'Pinia', 'Redux', 'Rxjs', 'Html/css', 'Sass/less', 'Responsive design', 'WebSocket', "SKILLS.ITEM2.HERRAMIENTA1"]
  public humanSkills =['SKILLS.ITEM3.HERRAMIENTA1','SKILLS.ITEM3.HERRAMIENTA2','SKILLS.ITEM3.HERRAMIENTA3','SKILLS.ITEM3.HERRAMIENTA4','SKILLS.ITEM3.HERRAMIENTA5','SKILLS.ITEM3.HERRAMIENTA6','SKILLS.ITEM3.HERRAMIENTA7','SKILLS.ITEM3.HERRAMIENTA8','SKILLS.ITEM3.HERRAMIENTA9',]
}
