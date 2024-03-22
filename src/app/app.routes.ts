import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ContacriadaComponent } from './components/contacriada/contacriada.component';
import { TelainicialComponent } from './components/telainicial/telainicial.component';
import { FichaComponent } from './ficha/ficha.component';
import { Ficha2Component } from './ficha2/ficha2.component';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';

export const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contacriada', component: ContacriadaComponent },
  { path: 'telainicial', component: TelainicialComponent},
  { path: 'ficha', component: FichaComponent},
  { path: 'ficha2', component: Ficha2Component},
  { path: 'cadastro-paciente', component: CadastroPacienteComponent}
];
