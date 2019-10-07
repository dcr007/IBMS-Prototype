import { Injectable } from '@angular/core';
import { RfpDetailsModel } from './rfp-details-model';

@Injectable({
  providedIn: 'root'
})
export class RfpDetailsService {
  getRfpDetails(): RfpDetailsModel[] {
    return [
      new RfpDetailsModel
      ('SAP Hana Implementation for Google', 'GHana787', '2019-01-03', '2019-11-03', 'Google Americas', 'Geoff Hill', 3007000, 'ACTIVE' ),
      new RfpDetailsModel
      ('Bid Data design for IBM', '787898', '2019-01-03', '2019-11-03', 'IBM Americas', 'George Ford', 7707000, 'ACTIVE' ),
      new RfpDetailsModel
      ('Hadoop Testing  for SAP', '8977', '2019-01-03', '2019-11-03', 'SAP Americas', 'Sally Hill', 3000000, 'ACTIVE' ),
      new RfpDetailsModel
      ('B2B Design for JP Morgan', '90987', '2019-01-03', '2019-11-03', 'Chase Inc', 'Cooper H', 3000000, 'ACTIVE' ),
      new RfpDetailsModel
      ('Java Training for Astech Inc', '80787', '2019-01-03', '2019-11-03', 'Astech Inc', 'Ram D', 3970000, 'PENDING' ),
      new RfpDetailsModel
      ('Oracle CC&B for PG&E', '89787', '2019-01-03', '2019-11-03', 'PG and E California', 'Trefford Simpson', 9090000, 'PENDING' )
    ];
  }
  constructor() { }
}
