import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './content-interface';
import { CONTENTS } from './contentDb';
import { MessageService } from './message.services';

@Injectable({
  providedIn: 'root',
})
export class IndianCricketService {

  constructor(private messageService: MessageService){ }

  fetchContent(): Observable<Content[]> {
    const content =  of(CONTENTS);
    this.messageService.add('Content array loaded!');
    return content;
  }

  fetchContentById(id: number): Observable<Content> {
    const content = CONTENTS.find(c => c.id === id);
    if (content) {
      this.messageService.add(`Content Item at Id: ${id}`)
      return of(content);
    }else{
      this.messageService.add('Unable to retrieve content with id ' + id);
    }
    throw new Error(`Content with id ${id} not found`);
  }
}
