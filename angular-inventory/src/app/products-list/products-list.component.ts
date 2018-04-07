import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Product} from '../product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productList: Product[];
  @Output('event') onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }
  clicked(p : Product) : void {
    this.currentProduct = p;
    this.onProductSelected.emit(p);
  }

  isSelected(p: Product): boolean{
    if(!p || !this.currentProduct){
      return false;
    }
    return p.sku === this.currentProduct.sku;
  }
  ngOnInit() {
  }

}
