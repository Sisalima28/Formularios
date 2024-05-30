import { Component } from '@angular/core';

@Component({
  selector: 'app-formularios-template',
  templateUrl: './formularios-template.component.html',
  styleUrl: './formularios-template.component.css'
})
export class FormulariosTemplateComponent {
  persona = {
    nombre: '',
    edad: ''
  };

  procesar(){
    console.log(this.persona)
  }

  constructor(){

  }
}
