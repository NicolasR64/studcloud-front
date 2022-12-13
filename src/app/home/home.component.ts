import { Component, OnInit, ViewChild } from '@angular/core';
import { Topic } from '../models/Topic';



const TOPICS: Topic[] = [
  {
    TopicId: 0,
    Question: "Brunquers est-il le meilleur prof?!",
    Created: new Date("2019-04-15"),
    TopicUserId: 0,
    Comments: null
  },
  {
    TopicId: 0,
    Question: "AWS qqun comprend?",
    Created: new Date("2020-07-27"),
    TopicUserId: 0,
    Comments: null
  }
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  displayedColumns: string[] = ['position', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
