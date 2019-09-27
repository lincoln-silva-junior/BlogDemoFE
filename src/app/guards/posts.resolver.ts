import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Post } from './post';
import { PostsService } from './../posts/posts.service';

@Injectable()
export class PostsResolver implements Resolve<Post> {
    constructor(private postsService: PostsService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {

        const id = route.params['id'];

        return this.postsService.getPost(id);
    }
}
