import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from '../pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PostsComponent } from './posts.component';

const postsRoutes: Routes = [
    { path: '', component: PostsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(postsRoutes)],
    exports: [RouterModule]
})
export class PostsRoutingModule {}
