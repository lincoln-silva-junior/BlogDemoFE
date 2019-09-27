import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsuarioNaoEncontradoComponent } from './usuario-nao-encontrado/usuario-nao-encontrado.component';
const usersRoutes: Routes = [
    { path: '', component: UsersComponent },
    { path: 'users/:id', component: UserDetailComponent },
    { path: 'users/naoEncontrado', component: UsuarioNaoEncontradoComponent },
];

@NgModule ({
    imports: [RouterModule.forChild(usersRoutes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}
