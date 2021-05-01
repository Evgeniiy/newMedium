import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesModule } from '../backendErrorMessages/backendErrorMessage.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesModule],
  exports: [ArticleFormComponent],
  declarations: [ArticleFormComponent],
  providers: [],
})
export class ArticleFormModule {}
