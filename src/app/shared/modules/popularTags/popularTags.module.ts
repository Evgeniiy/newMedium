import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsService } from './services/popular-tags.service';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect';
import { StoreModule } from '@ngrx/store';
import { LoadingModule } from '../loading/loading.module';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
import { reducers } from './store/reducers';
import { PopularTagsComponent } from './components/popularTags/popular-tags.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    RouterModule,
    LoadingModule,
    ErrorMessageModule,
  ],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
  declarations: [PopularTagsComponent],
})
export class PopularTagsModule {}
