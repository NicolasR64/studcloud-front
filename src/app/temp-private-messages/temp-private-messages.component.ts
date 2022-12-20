import { Component } from '@angular/core';
import { PrivateGroup } from '../models/PrivateGroup';
import { PrivateMessage } from '../models/PrivateMessage';
import { User } from '../models/User';

@Component({
  selector: 'app-temp-private-messages',
  templateUrl: './temp-private-messages.component.html',
  styleUrls: ['./temp-private-messages.component.css']
})
export class TempPrivateMessagesComponent {
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

  privateGroup: PrivateGroup =
    {
      PrivateGroupId: 1,
      RecipientUser: "nicovoltes",
      CurrentUserId: 1
    }

  
  // select * comments where CurrentTopicid == 1 Order By created ASC
  privateMessages: PrivateMessage[] = [
    {
      PrivateMessageId: 1,
      Created: new Date('2022-12-19T15:58:35'),
      PrivateGroupId: 1,
      PrivateMessageUserId: 1,
      PrivateCommunication: 'Wow trop bien cette application!',
    },
    {
      PrivateMessageId: 45,
      Created: new Date('2022-12-19T18:32:02'),
      PrivateGroupId: 1,
      PrivateMessageUserId: 2,
      PrivateCommunication: 'Vraiment bien codé, je me demande qui à fait ça.',
    },
    {
      PrivateMessageId: 2,
      Created: new Date('2022-12-19T19:16:45'),
      PrivateGroupId: 1,
      PrivateMessageUserId: 1,
      PrivateCommunication: 'Moi aussi. Tu as vu le forum que j\'ai créé?',
    },
    {
      PrivateMessageId: 76,
      Created: new Date('2022-12-19T23:24:54'),
      PrivateGroupId: 1,
      PrivateMessageUserId: 2,
      PrivateCommunication: 'oui je t\'ai déja répondu',
    },
  ];

  findUserName(PrivateMessageUserId: number) {
    let Nickname: string = '';
    this.users.forEach((user) => {
      if (user.Id == PrivateMessageUserId) {
        Nickname = user.Nickname;
      }
    });
    return Nickname;
  }

  findUserNameByString(PrivateMessageUserId: string) {
    let Nickname: string = '';
    this.users.forEach((user) => {
      if (user.Nickname == PrivateMessageUserId) {
        Nickname = user.Nickname;
      }
    });
    return Nickname;
  }
}
