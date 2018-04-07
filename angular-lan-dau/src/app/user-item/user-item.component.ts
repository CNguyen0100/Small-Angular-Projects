import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name: string;
  ten: string; // <- added name property
  n : number;
  constructor() {
    this.ten = 'Cuong'; //set the name
    this.n = Math.floor(Math.random() *6 )+1;
  }

  ngOnInit() {
  }

}
