import './PrivateGroup';
import { PrivateGroup } from './PrivateGroup';
import { User } from './User';
export class PrivateMessage{
  PrivateMessageId!: number;
  PrivateCommunication!: string;
  Created!: Date;
  PrivateGroupId!: number;
  PrivateGroup!: PrivateGroup;
  PrivateMessageUserId!: number;
  User!: User;
}
