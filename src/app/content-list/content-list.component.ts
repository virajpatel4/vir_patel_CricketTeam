import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent {
  contents: Content[] = [];
  inputTitle: string = '';
  titleSearchMessage: string = '';
  available: boolean = false;

  constructor() {
    const content1: Content = {
      id: 1,
      title: 'India',
      description: 'highest number of runs',
      creator: 'RCB',
      type: 'Batsman',
    };
    const content2: Content = {
      id: 2,
      title: 'Bangladesh',
      description: 'Good at field',
      creator: 'CSK',
      type: 'Keeper',
      tags: ['Thala',"Mahi"]
    };
    const content3: Content = {
      id: 3,
      title: 'England',
      description: 'highest number of wickets',
      creator: 'MI',
      type: 'Batsman',
    };
    const content4: Content = {
      id: 4,
      title: 'America',
      description: 'Thoughest fielding line up',
      creator: 'PKKS',
      type: 'Batsman',
    };
    const content5: Content = {
      id: 5,
      title: 'Australia',
      description: 'Highest centuries',
      creator: 'CSK',
    };
    const content6: Content = {
      id: 6,
      title: 'Africa',
      description: 'Yougest players',
      creator: 'RR',
    };
    const content7: Content = {
      id: 7,
      title: 'Pakistan',
      description: 'Toughest Balling line up',
      creator: 'MI',
    };
    this.contents.push(content1);
    this.contents.push(content2);
    this.contents.push(content3);
    this.contents.push(content4);
    this.contents.push(content5);
    this.contents.push(content6);
    this.contents.push(content7);
  }

  searchTitle() {
    
    this.available = false;
    this.titleSearchMessage = 'Title you searched for is unavailable';
    this.contents.forEach((element) => {
      console.log(`'${element.title}'....'${this.inputTitle}'`)
      if (element.title === this.inputTitle) {
        this.available = true;
        this.titleSearchMessage = 'Title you searched is available';
      } 
    });
  }

  addContent(content: Content) {
    this.contents.push(content);
  }
}
