import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UpcomingTableComponent } from './upcoming-table/upcoming-table.component';
import { MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [HomeComponent,
  UpcomingTableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule,
    MatTableModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class HomeModule { }
