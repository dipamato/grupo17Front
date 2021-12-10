import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  sesionIniciada?:boolean =false;
  subs : Subscription = new Subscription;

  constructor(private servicioSeguridad:SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.servicioSeguridad.ObtenerDatosusuarioEnSesion().subscribe((datos:ModeloIdentificar)=>{
     this.sesionIniciada = datos.estaIdentificado;
    })
  }

}
