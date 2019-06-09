import { createReducer, on } from '@ngrx/store';
import { increment, decrecement, reset } from './contador.actions';

export const initialState = 0;

export const contadorReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrecement, state => (state === 0 ? state : state - 1)),
  on(reset, state => (state = 0))
);
