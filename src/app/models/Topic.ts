class Topic{
  TopicId!: number;
  Question!: string;
  Created!: Date;
  TopicUserId!: number;
  User!: User;
  Comments!: Comment[];
}
