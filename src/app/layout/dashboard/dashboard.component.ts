import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
    // name: string;
    // position: number;
    // weight: number;
    // symbol: string;
    rfpName: string;
    rfpID: number;
    due: string;
    customer: string;
    lead: string;
    value: number;
    status: string ;
}


const ELEMENT_DATA: PeriodicElement[] = [
    // tslint:disable-next-line:max-line-length
    { rfpName: 'SAP Hana Implementation for Google', rfpID: 8988, due: '2019-12-11', customer: 'Google' , lead: 'George Ford', value: 3000000, status: 'PENDING' },
    // tslint:disable-next-line:max-line-length
    { rfpName: 'Bid Data design for IBM', rfpID: 2341, due: '2019-12-11', customer: 'IBM' , lead: 'Robin Hood', value: 9000000, status: 'PENDING' },
    // tslint:disable-next-line:max-line-length
    { rfpName: 'Hadoop Testing  for SAP', rfpID: 1278, due: '2019-12-11', customer: 'SAP' , lead: 'Abitab Bachan', value: 7000000, status: 'PENDING' },
    // tslint:disable-next-line:max-line-length
    { rfpName: 'B2B Design for JP Morgan', rfpID: 3456, due: '2019-12-11', customer: 'Chase Bank' , lead: 'Abdul Kalam', value: 5000000, status: 'ACTIVE' },
    // tslint:disable-next-line:max-line-length
    { rfpName: 'Java Training for NIIT Inc', rfpID: 6781, due: '2019-12-11', customer: 'NIIT' , lead: 'Rajini Kanth', value: 2000000, status: 'ACTIVE' },
    // tslint:disable-next-line:max-line-length
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    displayedColumns = ['rfpName', 'rfpID', 'due', 'customer', 'lead', 'value', 'status'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    places: Array<any> = [];

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    constructor() {
        this.places = [
            {
                imgSrc: 'assets/images/card-1.jpg',
                place: 'Cozy 5 Stars Apartment',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
                charge: '$899/night',
                location: 'Barcelona, Spain'
            },
            {
                imgSrc: 'assets/images/card-2.jpg',
                place: 'Office Studio',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
                charge: '$1,119/night',
                location: 'London, UK'
            },
            {
                imgSrc: 'assets/images/card-3.jpg',
                place: 'Beautiful Castle',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
                charge: '$459/night',
                location: 'Milan, Italy'
            }
        ];
    }

    ngOnInit() {}
}
