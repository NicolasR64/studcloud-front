class User{
  Id!: number;
  Name!:  string;
  Firstname!: string;
  Nickname!: string;
  Password!: string;
  Email!: string;
  Phone!: string;
  Birthday!: Date;
  Portefolios!: Portefolio[];
  Topics!: Topic[];
  Comments!: Commentary[];
  PrivateGroups!: PrivateGroup[];
  PrivateMessages!: PrivateMessage[];
}
