import * as fromRecipe from './recipe.actions';

describe('loadRecipes', () => {
  it('should return an action', () => {
    expect(fromRecipe.loadRecipes().type).toBe('[Recipe] Load Recipes');
  });
});
