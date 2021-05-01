import { Component, OnInit } from '@angular/core';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { Store, select } from '@ngrx/store';
import {
  isSubmittingSelector,
  validationErrorsSelector,
  isLoadingSelector,
  articleSelector,
} from '../../store/selectors';
import { getArticleAction } from '../../store/actions/getArticle.action';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { updateArticleAction } from 'src/app/editArticle/store/actions/updateArticle.action';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>;
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  slug: string;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initialValues();
    this.fetchData();
  }

  initialValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        };
      })
    );
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(updateArticleAction({ slug: this.slug, articleInput }));
  }
}
