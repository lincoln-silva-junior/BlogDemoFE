import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/guards/post';
import { PostsService } from '../posts.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  private posts: Post[] = [];
  @ViewChild('modalPostRegistration', {static: false}) modalPostRegistration: ModalComponent;

  constructor(private postsSevice: PostsService) { }

  ngOnInit() {
    this.MontaLista();
  }

  MontaLista() {
    this.posts = this.postsSevice.getPosts();
  }

  Cancelar() {
    this.modalPostRegistration.closeModal();
  }

  Cadastrar() {
    this.modalPostRegistration.showModal();
  }

}
