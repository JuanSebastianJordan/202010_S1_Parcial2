import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesModule } from '../series.module';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Array<Series>;
  selected=false;
  selectedSerie: Series;

  constructor(private seriesService: SeriesService) { }

  promedio():number{
    var s=0;
    for(let i=0; i<this.series.length;i++)
    {
      var x= this.series[i].season;
      s+=x;
    }
    s=s/this.series.length;
    return s;

  }

  onSelected(b: Series): void {
    this.selected = true;
    this.selectedSerie = b;
  }
  getSeries(): void {
    this.seriesService.getSeries()
      .subscribe(series => {
        this.series = series;
      });
  }
  ngOnInit() {
    this.getSeries();
    this.promedio();
  }

}
