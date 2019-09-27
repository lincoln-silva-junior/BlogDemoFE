import { Category } from './../guards/category';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {
  private categorias: Category[] = [
    {id: 1, name: 'Finanças', description: 'Posts Financeiros'},
    {id: 2, name: 'Esportes', description: 'Posts Esportivos'},
    {id: 3, name: 'Política', description: 'Posts Assuntos Políticos'},
  ];

  constructor() { }

  getCategorias() {
    return this.categorias;
  }

  getCategoria(id: number) {
    const categorias = this.getCategorias();
    for (let i = 0; i < categorias.length; i++) {
      const categoria = categorias[i];
      if (categoria.id == id) {
        return categoria;
      }
    }
    return null;
  }
}
