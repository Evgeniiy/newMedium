import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';
import { FeedTogglerModule } from './../shared/modules/feedToggler/feedToggler.module';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';

const routes: Routes = [{ path: 'tags/:slug', component: TagFeedComponent }];

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
  declarations: [TagFeedComponent],
  providers: [],
})
export class TagFeedModule {}
