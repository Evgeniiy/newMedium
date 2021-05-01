import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedTogglerComponent } from './components/feed-toggler/feed-toggler.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [FeedTogglerComponent],
  declarations: [FeedTogglerComponent],
})
export class FeedTogglerModule {}
