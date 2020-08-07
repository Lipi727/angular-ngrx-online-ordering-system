import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ShoppingListEffects } from './shopping-list.effects';

describe('ShoppingListEffects', () => {
  let actions$: Observable<any>;
  let effects: ShoppingListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ShoppingListEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ShoppingListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
