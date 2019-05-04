import { Component, OnInit } from '@angular/core';
import { CrashService } from '../crash.service';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-crash-chart',
  templateUrl: './crash-chart.component.html',
  styleUrls: ['./crash-chart.component.css'],
  providers: [CrashService]
})
export class CrashChartComponent implements OnInit {
  crashData ;
  data;
  constructor(private crashService: CrashService) { }

  ngOnInit() {

    this.crashService.getCrashData()
      .subscribe(crashData => {
        this.crashData = crashData ;

      }) ;
    console.log(this.crashData) ;
  }

  // filterChange() {
  //   this.filteredProducts = this.products.filter(x =>
  //     (x.category === 'kids' && this.filter.kids)
  //     || (x.category === 'mens' && this.filter.mens)
  //     || (x.category === 'womens' && this.filter.womens)
  //   );
  // }
}
