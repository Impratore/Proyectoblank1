import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.page.html',
  styleUrls: ['./platos.page.scss'],
})
export class PlatosPage implements OnInit {

  //no sirve, preguntar al profe
  palabra: string = 'Grandes';

  comidas = [
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
      titulo: 'Lomo salteado',
      imagen: 'assets/comidas/lomosaltado.jpg',
      descripcion: 'es un plato de fusión muy popular que mezcla las tradiciones chinas del salteado con ingredientes peruanos que incluyen ají amarillo, cilantro y tomate.'
    },
    {
      titulo: 'Lasaña',
      imagen: 'assets/comidas/lasaña.jpg',
      descripcion: 'es un tipo de pasta. Se suele servir en láminas superpuestas intercaladas con capas de ingredientes al gusto, más frecuentemente carne (ragú) en salsa boloñesa y bechamel.'
    },
    {
      titulo: 'Empanada de pino',
      imagen: 'assets/comidas/empanadadepino.jpg',
      descripcion: 'Las empanadas de pino son un platillo chileno hecho de masa rellena con un guiso de carne, cebolla, aceitunas, huevo duro y pasas. Se hornean hasta dorarse y son tradicionales en las Fiestas Patrias.'
    },
    {
      titulo: 'Sushi frito de pollo',
      imagen: 'assets/comidas/sushifritodepollo.jpg',
      descripcion: 'El sushi frito de pollo es una fusión deliciosa, relleno de pollo desmenuzado, mayonesa y salsa de soja, envuelto en alga nori y arroz. Se empaniza con pan rallado y se fríe hasta quedar crujiente por fuera y suave por dentro. Perfecto para quienes buscan una versión diferente del sushi, acompañada de salsa teriyaki o soya.'
    },
    {
      titulo: 'Chacarero',
      imagen: 'assets/comidas/chacarero.jpg',
      descripcion: 'El churrasco chacarero es un sándwich chileno tradicional, hecho con carne de res a la plancha, rodajas de tomate, ají verde, palta ya veces mayonesa, todo en una sartén crujiente. Es famoso por su combinación de sabores frescos y picantes.'
    },
    {
      titulo: 'Pastel de choclo',
      imagen: 'assets/comidas/pasteldechoclo.jpg',
      descripcion: 'El pastel de choclo es un plato típico chileno hecho a base de una suave mezcla de maíz fresco molido, que se hornea sobre un sabroso relleno de pino (carne molida y cebolla), acompañado de pollo, huevos duros, aceitunas y, a veces, pasas. La capa superior de maíz se dora ligeramente en el horno, logrando un contraste entre lo dulce y lo salado que hace de este plato un clásico de la cocina chilena.'
    },
    {
      titulo: 'Chorillana',
      imagen: 'assets/comidas/chorrillana.jpg',
      descripcion: 'La chorrillana es un plato tradicional chileno que consiste en una base de papas fritas crujientes, cubiertas con tiras de carne de res salteada, cebolla caramelizada, y salchichas, todo rematado con huevos fritos. Es un plato abundante, ideal para compartir, que combina sabores simples y reconfortantes.'
    },
    {
      titulo: 'Charquican',
      imagen: 'assets/comidas/charquican.jpeg',
      descripcion: 'Este plato es reconfortante y nutritivo, y se suele servir caliente, a veces acompañado de un huevo frito o una ensalada. El charquicán es conocido por su sabor rústico y su fácil preparación, siendo un favorito en muchas familias chilenas.'
    },
  ];

  constructor(private router: Router) { }


  ngOnInit() {
  }

  //no sirve, preguntar al profe
  mensaje() {
    let navigationextras: NavigationExtras = {
      state: {
        pal: this.palabra
      }
    }
    this.router.navigate(['/recetas'], navigationextras);
  }

}
