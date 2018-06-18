import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

@Input() titulo: string;
@Input() forLabel: string;


  constructor() { }

  ngOnInit() {
  }

}
