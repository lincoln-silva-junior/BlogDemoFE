import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostsRoutingModule } from './posts.routing.module';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { SearchComponent } from './search/search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PostsRoutingModule
     ],
    declarations: [PostsComponent,
                   PostsListComponent,
                   SearchComponent,
                   ModalComponent],
    exports: [],
    providers: [PostsService],
})
export class PostsModule {}
