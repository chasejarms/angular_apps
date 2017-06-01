import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('lettuce', 10),
        new Ingredient('cheese', 3)
      ]
    ),
    new Recipe(
      'Avocado Toast',
      'Toast to make avocados',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('ground beef', 4),
        new Ingredient('pickles', 6)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
