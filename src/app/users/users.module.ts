import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsuarioNaoEncontradoComponent } from './usuario-nao-encontrado/usuario-nao-encontrado.component';
// import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users.routing.module';
import { UsersService } from './users.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        FormsModule
        // RouterModule
    ],
    exports: [],
    declarations: [
        UsersComponent,
        UserDetailComponent,
        UsuarioNaoEncontradoComponent
    ],
    providers: [UsersService],
})
export class UsersModule { }
