import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ActionsComponent } from './actions/actions.component';
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './store/contador/contador.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { UsuarioReduce } from './store/usuarios/usuarios.reducer';
import { StaticsComponent } from './statics/statics.component';
import { AddPersonaComponent } from './add-persona/add-persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    StaticsComponent,
    AddPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      contador: contadorReducer,
      usuarios: UsuarioReduce
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
