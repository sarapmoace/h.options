import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatedDataComponent } from './updated-data/updated-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'updated-data', component: UpdatedDataComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
