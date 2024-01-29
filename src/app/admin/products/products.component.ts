import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { error } from 'console';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: any[] =[];

  constructor(private apiService: ApiService) {}

  ngoninit(): void {
    this.loadProducts();
  }

  loadProducts(): void{
    this.apiService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );
  }

  onAddProduct(): void {
    // Lógica para añadir un producto
    // Esto podría abrir un modal o redirigir a un formulario de "añadir producto"
  }

  onEditProduct(product: any): void {
    // Lógica para editar un producto existente
    // Podrías pasar el producto a un formulario de edición o abrir un modal con los detalles del producto para editar
  }

  onDeleteProduct(productId: number): void {
    this.apiService.deleteProduct(productId).subscribe(
      (response) => {
        // Actualizar lista de productos despues de eliminar
        this.products = this.products.filter(product => product.id !== productId);
      },
      (error) => {
        console.error('Error al eliminar el producto', error);
      }
    );
  }
}
