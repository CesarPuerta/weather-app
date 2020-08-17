import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers/';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'foo-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.scss'],
})
export class WeatherChartComponent implements OnInit {
  Highcharts = Highcharts;
  updateChart = false;
  chartOptions: any = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Weekly Temperature',
    },

    yAxis: {
      title: {
        text: 'Temperature °C',
      },
    },
    xAxis: { categories: [] },
    series: [],
  };

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.store.select('weather').subscribe((data) => {
      if (data) {
        const categories = [];
        const minTempSeries = [];
        const maxTempSeries = [];
        const theTempSeries = [];
        data.consolidated_weather.map((day: any) => {
          minTempSeries.push(+day.min_temp.toFixed(1));
          maxTempSeries.push(+day.max_temp.toFixed(1));
          theTempSeries.push(+day.the_temp.toFixed(1));
          categories.push(day.applicable_date);
        });
        this.chartOptions.xAxis.categories = categories;
        this.chartOptions.series = [
          {
            name: 'Min Temp',
            data: minTempSeries,
          },
          {
            name: 'Max Temp',
            data: maxTempSeries,
          },
          {
            name: 'Temp',
            data: theTempSeries,
          },
        ];
        this.updateChart = true;
      }
    });
  }
}
