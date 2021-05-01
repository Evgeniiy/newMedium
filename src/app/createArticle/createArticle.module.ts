import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
import { CreateArticleService } from './services/createArticle.service';
import { EffectsModule } from '@ngrx/effects';
import { CreateArticleEffect } from './store/effects/createArticle.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

const routes: Routes = [
  { path: 'articles/new', component: CreateArticleComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
  ],
  exports: [],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
