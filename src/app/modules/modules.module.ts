import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { UpdatedDataComponent } from './updated-data/updated-data.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [UpdatedDataComponent, HomeComponent],
  exports: [UpdatedDataComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MaterialModule
  ]
})
export class ModulesModule { }
