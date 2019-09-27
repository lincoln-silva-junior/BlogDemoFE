import { Injectable } from '@angular/core';
import { Post } from '../guards/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [
    {id: 1, title: 'Finanças', body: 'Economia do Brasil cresce.'},
    {id: 2, title: 'Esportes', body: 'Brasil foi o campeão da copa América'},
    {id: 3, title: 'Política', body: 'Reforma da previdência passa no congresso.'},
  ];

  constructor() { }

  getPosts() {
    return this.posts;
  }

  getPost(id: number) {
    const posts = this.getPosts();
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      if (post.id == id) {
        return post;
      }
    }
    return null;
  }
}
