import { Component ,  OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { FormBuilder,FormGroup,Validators } from '@angular/forms';

import { contacto } from 'src/app/interfaces/contacto';
import { imeilservicio } from 'src/app/services/imeil.service';

import { UtilidadService } from 'src/app/reutilizable/utilidad.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  contactForm: FormGroup;
  

  constructor(private router: Router,
  
    private fb: FormBuilder,
    private _utilidadServicio: UtilidadService,
    
    private _emailService: imeilservicio,
    



  ) {

    this.contactForm = this.fb.group({
      para: ['', [Validators.required, Validators.email]],
      contenido: ['', Validators.required],
      compañia: ['', Validators.required],
      telefono: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['',Validators.required],
     
    });

    



  }
  ngOnInit(): void {
    
  } 

  enviar_correo(){
    if (this.contactForm.valid) {
      const _contacto: contacto = {
        para: this.contactForm.value.para,
        compañia: this.contactForm.value.compañia,
        telefono: this.contactForm.value.telefono,
        nombre: this.contactForm.value.nombre,
        apellidos: this.contactForm.value.apellidos,
        contenido:this.contactForm.value.contenido,
      };


    


 
      this._emailService.correo(_contacto).subscribe({
        next: (data) => {
          if (data && data.status) {
            this._utilidadServicio.mostrarAlerta("El correo fue enviado correctamente", "");
          } else {
            this._utilidadServicio.mostrarAlerta("Correo enviado correctamente", "");
          }
        },
        error: (error) => {
          console.error('Error enviando correo:', error);
          this._utilidadServicio.mostrarAlerta("Error al enviar el correo", "Error");
        }
      });
    } else {
      console.log('Formulario inválido');
      // Puedes mostrar un mensaje de error o hac

    } 
      
}


  }

   

  
  


