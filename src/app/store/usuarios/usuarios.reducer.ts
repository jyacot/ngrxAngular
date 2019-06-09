import { Action, createAction, createReducer, on, props } from '@ngrx/store';
import { Persona } from './usuario.actions';

import * as UsuarioActions from './usuario.actions';

const initialState: Persona[] = [];

export const UsuarioReduce = createReducer(
  initialState,
  on(UsuarioActions.increment, (state, action) => {
    const { nombre, apellido } = action;
    return [...state, { nombre, apellido }];
  }),
  on(UsuarioActions.decrement, state => {
    const newState = [...state];
    newState.pop();
    return newState;
  }),
  on(UsuarioActions.reset, state => [])
);
