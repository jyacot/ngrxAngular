import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as UserActions from '../store/usuarios/usuario.actions';
import * as ContadorActions from '../store/contador/contador.actions';

import {
  increment,
  decrecement,
  AppState
} from '../store/contador/contador.actions';
import { contadorReducer } from '../store/contador/contador.reducer';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  constructor(private ngStore: Store<AppState>) {
    this.ngStore.subscribe(store => {
      console.log('Store: ', store);
    });
  }

  ngOnInit() {}

  incrementar() {
    this.ngStore.dispatch(increment());
  }

  decrementar() {
    this.ngStore.dispatch(decrecement());
  }

  reset() {
    this.ngStore.dispatch(UserActions.reset());
    this.ngStore.dispatch(ContadorActions.reset());
  }

  addUser() {
    // this.ngStore.dispatch(userIncrement());
  }
}
