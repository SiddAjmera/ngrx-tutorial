import { Injectable } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';

import * as toppingsActions from '../actions/toppings.actions';
import * as fromServices from '../../services/toppings.service';

@Injectable()
export class ToppingsEffects {
  constructor(
    private actions$: Actions,
    private toppingsService: fromServices.ToppingsService
  ) {}

  @Effect()
  loadToppings$ = this.actions$.pipe(
    ofType(toppingsActions.LOAD_TOPPINGS),
    switchMap(() => this.toppingsService.getToppings().pipe(
      map(toppings => new toppingsActions.LoadToppingsSuccess(toppings)),
      catchError(error => of(new toppingsActions.LoadToppingsFail(error)))
    ))
  );
}
