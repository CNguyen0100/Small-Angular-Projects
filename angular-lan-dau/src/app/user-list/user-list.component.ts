import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names : string[];
  lastNames: Array<string>

  constructor() {
    this.names = ['cuong','Cuong','Kevin', 'kevin'];
    this.lastNames = ['Nguyen', 'nguyen'];
  }

  ngOnInit() {
  }

}
