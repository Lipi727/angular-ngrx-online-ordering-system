import * as fromShoppingList from './shopping-list.actions';

describe('loadShoppingLists', () => {
  it('should return an action', () => {
    expect(fromShoppingList.loadShoppingLists().type).toBe('[ShoppingList] Load ShoppingLists');
  });
});
