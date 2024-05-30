import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosTemplateComponent } from './components/formularios-template/formularios-template.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'formulario', component:FormulariosTemplateComponent },
  { path: 'home', component:HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
