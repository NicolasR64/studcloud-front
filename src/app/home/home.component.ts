import { Component } from '@angular/core';
import { Topic } from '../models/Topic';
import { User } from '../models/User';
import { ConnectionService } from '../services/connection.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
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

  topics: Topic[] = [
    {
      TopicId: 1,
      Question: 'comment allez vous?',
      Created: new Date('2022-12-19T15:40:54'),
      TopicUserId: 1
    }
  ];

  findUserName(topicUserId: number) {
    let Nickname: string = '';
    this.users.forEach((user) => {
      if (user.Id == topicUserId) {
        Nickname = user.Nickname;
      }
    });
    return Nickname;
  }
}
