import { Component } from '@angular/core';
import { PrivateGroup } from '../models/PrivateGroup';
import { User } from '../models/User';

@Component({
  selector: 'app-private-groups',
  templateUrl: './private-groups.component.html',
  styleUrls: ['./private-groups.component.css']
})
export class PrivateGroupsComponent {
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

  privateGroups: PrivateGroup[] = [
    {
      PrivateGroupId: 1,
      RecipientUser: "nicovoltes",
      CurrentUserId: 1
    }
  ];
  

  findUserName(currentUserNickname: string) {
    let Nickname: string = '';
    this.users.forEach((user) => {
      if (user.Nickname == currentUserNickname) {
        Nickname = user.Nickname;
      }
    });
    return Nickname;
  }
}
