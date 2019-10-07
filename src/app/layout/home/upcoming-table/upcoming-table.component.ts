import { Component, OnInit } from '@angular/core';
import { RfpDetailsService } from './rfp-details.service';
import { RfpDetailsModel } from './rfp-details-model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-upcoming-table',
  templateUrl: './upcoming-table.component.html',
  styleUrls: ['./upcoming-table.component.scss'],
  providers: [RfpDetailsService]
})
export class UpcomingTableComponent implements OnInit {
  dataSource: MatTableDataSource<RfpDetailsModel>;
  data: RfpDetailsModel[];
  cols: any[];

  constructor(private rfpDetailsService: RfpDetailsService) { }

  ngOnInit() {
    this.data = this.rfpDetailsService.getRfpDetails();
    this.cols = [
      {field: 'rfpName', header: 'RFP Description'},
      {field: 'end', header: 'RFP Due Date'},
      {field: 'customer', header: 'Client Name'},
      {field: 'lead', header: 'Lead'},
      {field: 'value', header: 'Deal value(in USD)'},
      {field: 'status', header: 'Bid Status'},
    ];
  }

}
