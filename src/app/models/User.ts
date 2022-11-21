import { Commentary } from "./Commentary";
import { Portefolio } from "./Portefolio";
import { PrivateGroup } from "./PrivateGroup";
import { PrivateMessage } from "./PrivateMessage";
import { Topic } from "./Topic";

export class User{
  Id!: number;
  Name!:  string;
  Firstname!: string;
  Nickname!: string;
  Password!: string;
  Email!: string;
  Phone!: string;
  Birthday!: Date|null;
  Portefolios!: Portefolio[]|null;
  Topics!: Topic[]|null;
  Comments!: Commentary[]|null;
  PrivateGroups!: PrivateGroup[]|null;
  PrivateMessages!: PrivateMessage[]|null;
}
