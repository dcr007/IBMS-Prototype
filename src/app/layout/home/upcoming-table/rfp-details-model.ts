export class RfpDetailsModel {
    constructor(
        public rfpName: string,
        public rfpID: string,
        public start: string,
        public end: string,
        public customer: string,
        public lead: string,
        public value: number,
        public status: string
      ) {
          // ('SAP Hana Implementation for Google','GHana787','2019-01-03','2019-11-03','Google Americas','Geoff Hill','3000000', 'ACTIVE' )
      }
}
