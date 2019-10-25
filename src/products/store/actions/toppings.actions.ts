import { Action } from '@ngrx/store';
import { Topping } from 'src/products/models/topping.model';

export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export const VISUALIZE_TOPPINGS = '[Products] Visualize Toppings';

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  constructor(public payload: any) {}
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(public payload: Array<Topping>) {}
}

export class VisualizeToppings implements Action {
  readonly type = VISUALIZE_TOPPINGS;
  constructor(public payload: Array<number>) {}
}

export type ToppingsActions = LoadToppings | LoadToppingsFail | LoadToppingsSuccess | VisualizeToppings;
