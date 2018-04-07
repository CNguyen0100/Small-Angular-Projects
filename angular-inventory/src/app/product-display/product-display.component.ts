import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
