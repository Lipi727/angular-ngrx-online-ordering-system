import * as fromShoppingList from '../reducers/shopping-list.reducer';
import { selectShoppingListState } from './shopping-list.selectors';

describe('ShoppingList Selectors', () => {
  it('should select the feature state', () => {
    const result = selectShoppingListState({
      [fromShoppingList.shoppingListFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
