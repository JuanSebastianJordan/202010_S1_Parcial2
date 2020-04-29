import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesDetailComponent } from './seriesDetail/seriesDetail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[SeriesListComponent],
  declarations: [SeriesListComponent,SeriesDetailComponent]
})
export class SeriesModule { }
