import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') item: ElementRef;
  @ViewChild('numberInput') number: ElementRef;
  @Output() newShoppingItem = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    const item = this.item.nativeElement.value;
    const number = this.number.nativeElement.value;
    const newIngredient = new Ingredient(item, number);
    this.newShoppingItem.emit(newIngredient);
  }

}
