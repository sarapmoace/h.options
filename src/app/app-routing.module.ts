import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatedDataComponent } from './modules/updated-data/updated-data.component';

const routes: Routes = [
  { path: 'updated-data', component: UpdatedDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
