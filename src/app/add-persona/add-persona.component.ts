import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as UserActions from '../store/usuarios/usuario.actions';
import { AppState } from '../store/contador/contador.actions';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.scss']
})
export class AddPersonaComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private ngStore: Store<AppState>) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    });
  }

  ngOnInit() {}

  save() {
    this.ngStore.dispatch(UserActions.increment(this.form.value));
    this.form.reset();
  }
}
