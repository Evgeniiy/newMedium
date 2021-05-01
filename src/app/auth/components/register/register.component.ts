import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerAction } from '../../store/actions/register.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { registerRequestInterface } from '../../types/registerRequest.interface';
import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    // Выбираем данные по нашему селектору из стора и сетим их в обзербл
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
    console.log(this.form.valid);
  }

  onSubmit() {
    console.log(this.form.value);
    const request: registerRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));

    // this.form.reset();
  }
}
