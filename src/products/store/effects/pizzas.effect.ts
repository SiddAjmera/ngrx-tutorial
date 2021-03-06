import { Injectable } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';

import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services/pizzas.service';

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.pipe(
    ofType(pizzaActions.LOAD_PIZZAS),
    switchMap(() => this.pizzaService.getPizzas().pipe(
      map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
      catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
    ))
  );
}
