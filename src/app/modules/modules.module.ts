import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { UpdatedDataComponent } from './updated-data/updated-data.component';


@NgModule({
  declarations: [UpdatedDataComponent],
  exports: [UpdatedDataComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
