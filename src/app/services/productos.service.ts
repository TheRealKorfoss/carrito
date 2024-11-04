

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definimos la interfaz para nuestros productos
export interface Producto {
  cantidad_seleccionada: number;
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  // URL de nuestro backend
  private apiUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { }

  // Método para obtener todos los productos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}