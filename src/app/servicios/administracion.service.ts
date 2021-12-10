import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPersona } from '../modelos/persona.modelo';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor(private http: HttpClient) { }

  Creacion(nombres:string, apellidos:string, correo:string, celular:string):Observable<ModeloPersona>
  {
    return this.http.post("http://localhost:3000/personas",{
      nombres:nombres,
      apellidos:apellidos,
      correo:correo,
      celular:celular
    },{
      headers: new HttpHeaders()
    }
    )
  }
}
