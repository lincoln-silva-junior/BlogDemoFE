
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
// import { UsersComponent } from './users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { CategoriesGuard } from './guards/categories.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
    { path: 'categories',
        loadChildren: () => import('./category/category.module').then(mod => mod.CategoryModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard] // ,
        // canActivateChild: [CategoriesGuard]
    },
    { path: 'users',
        loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    { path: 'login',
        component: LoginComponent
    },
    { path: 'posts',
        loadChildren: () => import('./posts/posts.module').then(mod => mod.PostsModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    { path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    { path: '',
      redirectTo: '/posts',
      pathMatch: 'full'
    },
    { path: '**',
      component: PaginaNaoEncontradaComponent // ,
      // canActivate: [AuthGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule ({
    // imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
