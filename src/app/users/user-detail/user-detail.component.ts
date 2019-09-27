import { UsersService } from './../users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  id: number;
  inscricao: Subscription;
  usuario: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private usersService: UsersService) {
      // this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
        this.id = params['id'];
    this.usuario = this.usersService.getUser(this.id);
    if (this.usuario == null) {
      this.router.navigate(['/naoEncontrado']);
    }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
