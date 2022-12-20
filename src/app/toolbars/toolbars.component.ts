import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-toolbars',
  templateUrl: './toolbars.component.html',
  styleUrls: ['./toolbars.component.css']
})
export class ToolbarsComponent implements OnInit {
  isConnected = false;
  constructor(connectionService: ConnectionService) {
    this.isConnected = connectionService.isLoggedIn;
   }

  ngOnInit(): void {
  }

}
