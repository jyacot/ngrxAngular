import { createAction, props } from '@ngrx/store';

/**
 * Actions
 */

export interface Persona {
  nombre: string;
  apellido: string;
}
export const increment = createAction(
  '[Usuarios] Incrementar',
  props<Persona>()
);
export const decrement = createAction('[Usuarios] Decrementar');
export const reset = createAction('[Usuarios] Reset');
