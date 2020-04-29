import { Component, OnInit, Input } from '@angular/core';
import { Series } from '../series';

@Component({
  selector: 'app-seriesDetail',
  templateUrl: './seriesDetail.component.html',
  styleUrls: ['./seriesDetail.component.css']
})
export class SeriesDetailComponent implements OnInit {

  @Input() seriresDetail: Series;
  constructor() { }

  ngOnInit() {
  }

}
