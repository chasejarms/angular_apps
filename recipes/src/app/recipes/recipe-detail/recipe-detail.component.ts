import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addToIngredientList() {
    this.recipe.ingredients.forEach((ingredient) => {
      this.shoppingListService.addIngredient(ingredient);
    })
  }

}
