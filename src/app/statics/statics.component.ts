import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/contador/contador.actions';

@Component({
  selector: 'app-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.scss']
})
export class StaticsComponent implements OnInit {
  usuarios$ = this.ngStore.select('usuarios');
  contador$ = this.ngStore.select('contador');
  constructor(private ngStore: Store<AppState>) {
    // this.ngStore.select('usuarios').subscribe(usuarios => {
    //   console.log('Usuario: ', usuarios);
    // });
  }

  ngOnInit() {}
}
