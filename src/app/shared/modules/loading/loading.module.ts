import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [CommonModule],
  exports: [LoadingComponent],
  declarations: [LoadingComponent],
  providers: [],
})
export class LoadingModule {}
