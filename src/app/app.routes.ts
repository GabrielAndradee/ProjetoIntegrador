import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ContacriadaComponent } from './components/contacriada/contacriada.component';
import { TelainicialComponent } from './components/telainicial/telainicial.component';

export const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contacriada', component: ContacriadaComponent },
  { path: 'telainicial', component: TelainicialComponent},
];
