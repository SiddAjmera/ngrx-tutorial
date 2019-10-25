import * as fromToppings from '../actions/toppings.actions';
import { Topping } from '../../models/topping.model';

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loading: boolean;
  loaded: boolean;
  selectedToppings: Array<number>;
}

export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false,
  selectedToppings: []
};

export function reducer(
  state = initialState,
  action: fromToppings.ToppingsActions
): ToppingsState {

  switch (action.type) {

    case fromToppings.VISUALIZE_TOPPINGS : {
      const selectedToppings = action.payload;
      return {
        ...state,
        selectedToppings
      };
    }

    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;

      const entities = toppings.reduce(
        (ntities: { [id: number]: Topping }, topping: Topping) => {
          return {
            ...ntities,
            [topping.id]: topping
          };
        }, {
        ...state.entities
      }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

  }

  return state;
}

export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;
