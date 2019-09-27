import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers() {
    return [
        {id: 1, nome: 'João'},
        {id: 2, nome: 'Maria'}
    ];
  }

  getUser(id: number) {
    const usuarios = this.getUsers();
    console.log(usuarios);
    for (let i = 0; i < usuarios.length; i++) {
      const usuario = usuarios[i];
      console.log(usuario.id);
      console.log(id);
      if (usuario.id == id) {
        console.log('Entrei Aqui!');
        return usuario;
      }
    }
    return null;
  }
}
