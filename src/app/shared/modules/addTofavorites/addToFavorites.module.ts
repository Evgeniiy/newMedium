import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddToFavoritesComponent } from './components/add-to-favorites/add-to-favorites.component';
import { AddToFavoritesService } from './services/addToFavorites.service';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoritesEffect } from './store/effects/addToFavorites.effect';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  providers: [AddToFavoritesService],
})
export class AddToFavoritesModule {}
