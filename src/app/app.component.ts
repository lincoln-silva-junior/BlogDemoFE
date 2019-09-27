import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  mostrarMenu = false;
  title = 'app';
  inscricao: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.inscricao = this.authService.mostraMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
