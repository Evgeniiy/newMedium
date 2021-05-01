import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';

const routes: Routes = [{ path: 'feed', component: YourFeedComponent }];

import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';
import { YourFeedComponent } from './components/your-feed/your-feed.component';

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
  declarations: [YourFeedComponent],
  providers: [],
})
export class YourFeedModule {}
