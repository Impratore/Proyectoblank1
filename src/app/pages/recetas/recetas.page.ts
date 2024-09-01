import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

  recetas = [
    {
      titulo: 'Pure con carne',
      imagen: 'assets/comidas/purecarne.jpg',
      ingrediente: '1 kilo de papas | 1 litro de leche | 1 cucharadita de margarina | 1 kilo de posta rosada | 1 cebota | 1 zanahoria | medio pimenton | 2 dientes de ajo | media taza de vino blanco | aliños | 2 cucharadas de maicena',
      preparacion: 'Preparar el pure con las papas, leche y margarina. Luego en una olla a presion, echar la carne, cebolla, zanahoria, pimenton, ajo mas el vino, sal a gusto y aliñamos. Una vez ya cocida la carne la sacamos cortamos en trozos y trituramos lo restante en la olla, luego agregamos las cucharadas de maicena y esperamos el hervor'
    },
    {
      titulo: 'Caracoquesos',
      imagen: 'assets/comidas/caracoquesos.jpg',
      ingrediente: '250 gramos de caracoquesos | 2 cucharadas de mantequilla | 2 cucharadas de harina | 250 ml. de leche | 150 gramos de queso | sal y pimienta',
      preparacion: 'Comienza a hervir agua para cocer los caracoquesos, mientras en una olla pon a derretir la mantequilla y pon un diente de ajo triturado, agrega harina y revielve formando una pasta, Agrega la leche de a poco sin dejar de revolver para que no se formen grumos, cuando este caliente agrega el quedo y sazona. Sigue revolviendo hasta que se funda. Con los caracoquesos ya cocidos agrega la salsa, mezcla y ponlo un minuto mas al fuego a caletar y listo'
    }
    // Agrega más recetas aquí según sea necesario
  ];



  constructor() { }

  ngOnInit() {
  }

}
