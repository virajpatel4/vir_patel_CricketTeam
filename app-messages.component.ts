import { Component, Input } from '@angular/core';
import { MessageService } from "../helper-files/message.services";

@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.css'],
})
export class AppMessagesComponent {
  @Input() messages: string[] = ['sdssds'];

  constructor(public messageService: MessageService) {}
}
