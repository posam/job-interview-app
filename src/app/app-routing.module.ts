import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructionsComponent } from './instructions/instructions.component';

const routes: Routes = [
  { path: '', redirectTo: 'instructions', pathMatch: 'full' },
  { path: 'instructions', component: InstructionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
