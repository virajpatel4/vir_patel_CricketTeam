import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { IndianCricketService } from './helper-files/cricketteam.service';
import { MessageService } from './helper-files/message.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CricketTeam';
  contentWithId!: Content;
  selectedItemId: string = '';

  constructor(private cricketService: IndianCricketService,
              private messageService: MessageService) {}

  ngOnInit() {
    this.getTopContent();
  }

  getTopContent() {
    const topContentId = 2; // id of the desired top content
    this.cricketService.fetchContentById(topContentId).subscribe((data) => {
      this.contentWithId = data;
    });
  }

  getSingleContent() {
    if (!this.selectedItemId) {
      this.messageService.add('Please enter an item ID.');
      return;
    }
    const id = parseInt(this.selectedItemId);
    if(isNaN(id) || id < 1){
      this.messageService.add('Unable to retrieve content with id ' + id);

    }
    this.cricketService.fetchContentById(id).subscribe(
      (item: Content) => {
        this.contentWithId = item;
        this.messageService.clear();
      },
      (error) => {
        this.selectedItemId = '';
        this.messageService.add(`Unable to retrieve item with ID ${this.selectedItemId}.`);
      }
    );
  }
}
