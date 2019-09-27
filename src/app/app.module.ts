import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './posts/comments/comments.component';
import { TagsComponent } from './posts/tags/tags.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { UsersService } from './users/users.service';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CategoriesGuard } from './guards/categories.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
// import { UsersModule } from './users/users.module';
// import { CategoryModule } from './category/category.module';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    TagsComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // UsersModule,
    // CategoryModule,
    AppRoutingModule
    // routing
  ],
  providers: [
              AuthService,
              AuthGuard,
              CategoriesGuard
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
