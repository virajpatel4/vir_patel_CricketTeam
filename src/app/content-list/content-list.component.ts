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
      description: 'Run Machine Kohli',
      creator: 'VK',
      type: 'Batsman',
    };
    const content2: Content = {
      id: 2,
      title: 'Bangladesh',
      description: 'He is a one of the best batsman for bangladesh',
      creator: 'BT',
      type: 'Batsman',
      tags: ['Das',"Liton"]
    };
    const content3: Content = {
      id: 3,
      title: 'England',
      description: 'highest number of run for england',
      creator: 'Kevin Peterson',
      type: 'Batsman',
    };
    const content4: Content = {
      id: 4,
      title: 'West Indies',
      description: 'GayleStrome coming',
      creator: 'Gayle',
      type: 'Batsman',
    };
    const content5: Content = {
      id: 5,
      title: 'Australia',
      description: 'TikToker',
      creator: 'Warner',
    };
    const content6: Content = {
      id: 6,
      title: 'Africa',
      description: 'MR 360',
      creator: 'ABD',
    };
    const content7: Content = {
      id: 7,
      title: 'Pakistan',
      description: 'Duck Specialist',
      creator: 'Afridi',
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

