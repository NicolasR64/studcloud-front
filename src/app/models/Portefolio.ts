import { User } from "./User";

export class Portefolio{
  PortefolioId!: number;
  Name!: string;
  LinkURL!: string;
  Created!: Date;
  CurrentUserId!: number;
  User!: User;
}

