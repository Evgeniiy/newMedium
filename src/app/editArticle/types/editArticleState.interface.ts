import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

export interface EditArticleStateInterface {
  article: ArticleInterface | null;
  isLoading: boolean;
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
