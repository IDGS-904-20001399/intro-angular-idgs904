import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IricComponent } from './escuela/iric/iric.component';
import { OperasbasComponent } from './escuela/formularios/operasbas/operasbas.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'IriComponent', component: IricComponent},
    {path: 'OperasBasComponent', component: OperasbasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
