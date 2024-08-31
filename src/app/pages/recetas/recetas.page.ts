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
    },
    {
      titulo: 'lomo salteado',
      imagen: 'assets/comidas/lomosalteado.jpg',
      descripcion: 'es un plato de fusión muy popular que mezcla las tradiciones chinas del salteado con ingredientes peruanos que incluyen ají amarillo, cilantro y tomate.'
    },
    {
      titulo: 'lasaña',
      imagen: 'assets/comidas/lasaña.jpg',
      descripcion: 'es un tipo de pasta. Se suele servir en láminas superpuestas intercaladas con capas de ingredientes al gusto, más frecuentemente carne (ragú) en salsa boloñesa y bechamel.'
    },
    {
      titulo: 'empanada de pino',
      imagen: 'assets/comidas/empanadadepino.jpg',
      descripcion: 'Las empanadas de pino son un platillo chileno hecho de masa rellena con un guiso de carne, cebolla, aceitunas, huevo duro y pasas. Se hornean hasta dorarse y son tradicionales en las Fiestas Patrias.'
    },
    {
      titulo: 'cazuela de vacuno',
      imagen: 'assets/comidas/cazueladevacuno.jpg',
      descripcion: 'La cazuela de vacuno es un guiso tradicional chileno hecho con carne, papas, maíz, zapallo y otros vegetales, cocidos en un caldo sabroso. Es un plato reconfortante y típico de la cocina casera chilena..'
    },
    {
      titulo: 'pizza napolitana',
      imagen: 'assets/comidas/pizzanapolitana.jpg',
      descripcion: 'es una pizza italiana con base delgada, salsa de tomate, mozzarella, albahaca y aceite de oliva. Es conocida por su simplicidad y sabor auténtico.'
    }
    // Agrega más recetas aquí según sea necesario
  ];

  constructor() { }

  ngOnInit() {
  }

}
