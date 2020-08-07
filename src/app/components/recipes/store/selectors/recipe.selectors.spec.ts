import * as fromRecipe from '../reducers/recipe.reducer';
import { selectRecipeState } from './recipe.selectors';

describe('Recipe Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRecipeState({
      [fromRecipe.recipeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
