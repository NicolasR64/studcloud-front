import './PrivateMessage';
import { PrivateMessage } from './PrivateMessage';
import { User } from './User';
export class PrivateGroup{
  PrivateGroupId!: number;
  RecipientUser!: string;
  CurrentUserId!: number;
  User!: User;
  PrivateMessages!: PrivateMessage[];
}
