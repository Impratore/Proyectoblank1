import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

  recetas = [
    {
      titulo: 'Caracoquesos',
      imagen: 'assets/comidas/caracoquesos.jpg',
      descripcion: 'Caracoquesos es un plato rico en proteína y alta en vitamina C. Este plato es ideal para personas con diabetes o enfermedades que afectan la digestión.'
    },
    {
      titulo: 'Pure con carne',
      imagen: 'assets/comidas/purecarne.jpg',
      descripcion: 'El pure con carne es una comida sólida y nutritiva que puede ayudar a mantener el peso y mejorar la calidad de vida de los niños y adolescentes.'
    },
    {
      titulo: 'Tallarines con carne molida',
      imagen: 'assets/comidas/Tallarinesconcarne.jpg',
      descripcion: 'Los tallarines con carne molida son un plato rico en proteína y alta en vitamina C. Este plato puede servir como comida para niños y adolescentes en edad temprana.'
    }
    // Agrega más recetas aquí según sea necesario
  ];

  constructor() { }

  ngOnInit() {
  }

}
