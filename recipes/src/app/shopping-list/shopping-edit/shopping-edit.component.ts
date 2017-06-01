import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') item: ElementRef;
  @ViewChild('numberInput') number: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addItem() {
    const item = this.item.nativeElement.value;
    const number = this.number.nativeElement.value;
    const newIngredient = new Ingredient(item, number);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
