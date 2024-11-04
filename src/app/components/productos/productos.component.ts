import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService, Producto } from '../../services/productos.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productosService: ProductosService,
    private carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
      }
    });
  }

  // Añadimos el método con tipo explícito
  agregarAlCarrito(producto: any): void {
    console.log('Agregando al carrito:', producto);
    this.carritoService.agregarProducto(producto);
    alert('Producto agregado al carrito');
  }
}