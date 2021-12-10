import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  fgCreacion: FormGroup = this.fb.group({
    'nombres': ["",[Validators.required]],
    'apellidos':["",[Validators.required]],
    'correo':["",[Validators.required, Validators.email]],
    'celular':["",[Validators.required]],
  })
  constructor(private fb: FormBuilder,
    private servicioAdministracion:AdministracionService) { }

  ngOnInit(): void {
  }

  CrearUsuario(){
    let nombres =this.fgCreacion.controls['nombres'].value;
    let apellidos =this.fgCreacion.controls['apellidos'].value;
    let correo =this.fgCreacion.controls['correo'].value;
    let celular =this.fgCreacion.controls['celular'].value;
    alert (nombres);
   

  }

}
