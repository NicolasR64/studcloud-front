import { Topic } from './Topic';
import { User } from './User';
export class Commentary{
  CommentId!: number;
  Created!: Date;
  CurrentTopicId!: number;
  Topic!: Topic;
  CommentUserId!: number;
  User!: User;
}
