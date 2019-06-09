import { createAction } from '@ngrx/store';

export interface AppState {
  contador: number;
  usuarios: any[];
}

/**
 * Actions
 */
export const increment = createAction('[Contador] Incrementar');
export const decrecement = createAction('[Contador] Decrementar');
export const reset = createAction('[Contador] Reset');
