import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { Routes, RouterModule } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';

const routes: Routes = [{ path: '', component: GlobalFeedComponent }];

import { FeedTogglerModule } from './../shared/modules/feedToggler/feedToggler.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  exports: [],
  declarations: [GlobalFeedComponent],
  providers: [],
})
export class GlobalFeedModule {}
