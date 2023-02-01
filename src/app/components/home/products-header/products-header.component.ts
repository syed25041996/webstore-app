import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']
})
export class ProductsHeaderComponent {

  @Output() columnsCountUpdate = new EventEmitter<number>

  sort = 'desc'
  itemsCount = 12

  onSortUpdated(newSort : string) : void{
    this.sort = newSort
  }

  onItemsUpdated(count : number) : void{
    this.itemsCount = count
  }

  onColumnsUpdated(colsNum : number) : void{
    this.columnsCountUpdate.emit(colsNum)
  }
}
