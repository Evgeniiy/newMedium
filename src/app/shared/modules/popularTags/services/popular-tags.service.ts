import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularTagType } from '../../../types/popularTag.type';
import { environment } from '../../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { GetPopularTagsResponseInterface } from '../types/getPopularTagsResponse.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http.get(url).pipe(
      map((response: GetPopularTagsResponseInterface) => {
        return response.tags;
      })
    );
  }
}
