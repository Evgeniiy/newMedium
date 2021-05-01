import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TagListComponent } from './components/tagList/tag-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [TagListComponent],
  declarations: [TagListComponent],
  providers: [],
})
export class TagListModule {}
