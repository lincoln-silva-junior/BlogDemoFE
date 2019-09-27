import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  usuarios: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
      private usersService: UsersService,
      private route: ActivatedRoute,
      private router: Router) {

      this.usuarios = this.usersService.getUsers();
      this.inscricao = this.route.queryParams.subscribe(
        (queryParams: any) => {
          this.pagina = queryParams.pagina;
        });
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.pagina++;

    this.router.navigate(['/users'], {queryParams: {pagina: this.pagina} });
  }

}
