import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetArticleResponseInterface } from '../types/getArticleResponse.interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ArticleInterface } from '../types/article.interface';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((response: GetArticleResponseInterface) => {
        return response.article;
      })
    );
  }
}
