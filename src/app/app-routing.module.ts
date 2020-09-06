import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'wrapper', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)},

  // Wildcard Route
  { path: '**', component: LoginComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
