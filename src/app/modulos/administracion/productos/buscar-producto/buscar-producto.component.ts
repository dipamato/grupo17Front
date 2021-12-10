import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  ListaProductos:ModeloProducto[]=[];

  constructor(private servicioProducto: ProductoService) { 

  }

  ngOnInit(): void {
    this.ObtenerListaProductos();
  }

  ObtenerListaProductos(){
    this.servicioProducto.ConsultarProducto().subscribe((datos:ModeloProducto[])=>{
      this.ListaProductos = datos;
    })
  }

}
