import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MzCollapsibleModule } from 'ngx-materialize';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let $ : any;

    // $(function() {
    //   // $('.button-collapse').sideNav();
    //   $( '.collapsible' ).collapsible();
    // });
  }

}
