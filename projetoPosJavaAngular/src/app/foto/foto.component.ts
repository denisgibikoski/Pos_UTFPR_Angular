import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {


  @Input() titulo: string;
  url: string = 'assets/img/';
  @Input() imagem: string;
  @Input() classe: string;

  constructor() { }

  ngOnInit() {
  }

}
