import { PizzasEffects } from './pizzas.effect';
import { ToppingsEffects } from './toppings.effect';

export const effects: Array<any> = [PizzasEffects, ToppingsEffects];
export * from './pizzas.effect';
export * from './toppings.effect';
