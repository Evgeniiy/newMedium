import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessage.module';
import { PersistanceService } from '../shared/services/persistance.service';
import { LoginEffect } from './store/effects/login.effect';
import { LoginComponent } from './components/login/login.component';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect';
import { UpdateCurrentUserEffect } from './store/effects/updateCurrentUser.effect';
import { LogoutEffect } from './store/effects/logout.effect';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      UpdateCurrentUserEffect,
      LogoutEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
