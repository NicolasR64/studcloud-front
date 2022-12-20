import { Component } from '@angular/core';
import { Commentary } from '../models/Commentary';
import { User } from '../models/User';

@Component({
  selector: 'app-temp-messages',
  templateUrl: './temp-messages.component.html',
  styleUrls: ['./temp-messages.component.css'],
})
export class TempMessagesComponent {
  // mock users
  users: User[] = [
    {
      Id: 1,
      Name: 'ravaux',
      Firstname: 'nicolas',
      Nickname: 'nicovoltes',
      Password: 'zvIDG4s#@4z',
      Email: 'email@gmail.com',
      Phone: '0125 45 45 89',
      Birthday: null,
      Portefolios: null,
      Topics: null,
      Comments: null,
      PrivateGroups: null,
      PrivateMessages: null,
    },
    {
      Id: 2,
      Name: 'rav',
      Firstname: 'nico',
      Nickname: 'nico',
      Password: 'zvIDG4s#@4z',
      Email: 'email@gmail.com',
      Phone: '0125 45 45 89',
      Birthday: null,
      Portefolios: null,
      Topics: null,
      Comments: null,
      PrivateGroups: null,
      PrivateMessages: null,
    },
  ];

  // select * comments where CurrentTopicid == 1 Order By created ASC
  comments: Commentary[] = [
    {
      CommentId: 1,
      Created: new Date('2022-12-19T15:58:35'),
      CurrentTopicId: 1,
      CommentUserId: 1,
      Description: 'hello',
    },
    {
      CommentId: 45,
      Created: new Date('2022-12-20T08:32:02'),
      CurrentTopicId: 1,
      CommentUserId: 2,
      Description: 'Salut ça va?',
    },
    {
      CommentId: 2,
      Created: new Date('2022-12-20T09:16:45'),
      CurrentTopicId: 1,
      CommentUserId: 1,
      Description: 'Bien et toi?',
    },
    {
      CommentId: 76,
      Created: new Date('2022-12-21T03:24:54'),
      CurrentTopicId: 1,
      CommentUserId: 2,
      Description: 'Très bien!',
    },
  ];

  findUserName(commentUserId: number) {
    let Nickname: string = '';
    this.users.forEach((user) => {
      if (user.Id == commentUserId) {
        Nickname = user.Nickname;
      }
    });
    return Nickname;
  }
}
