import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { EntertainmentServiceService } from '../entertainment-service.service';

@Component({
  selector: 'app-content-card',
  templateUrl: '../content-card/content-card.component.html',
  styleUrls: ['../content-card//content-card.component.css']
})
export class ContentCardComponent{
  @Input() contentToDisplay:Content | any;
content: any;
 
  constructor(private entrnService: EntertainmentServiceService){
   
  }

  logIdTitle(contentInfoToLog:Content):void{
    console.log(`ID: ${contentInfoToLog.id}`)
    console.log(`TITLE: ${contentInfoToLog.title}`)
  }

  addNewContentToList(event:Content){
    const contentIndxToUpdate = this.entrnService.sharedContent.findIndex(content=>content.id==event.id);
    if (contentIndxToUpdate > -1) {
      this.entrnService.sharedContent[contentIndxToUpdate] = event;
      this.entrnService.sharedContent = [...this.entrnService.sharedContent];
    }
  }
}
