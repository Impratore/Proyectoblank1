import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

  // Estas son las recetas, cuando se ponga una nuva, ponlas aqui
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
    },
    {
      titulo: 'Tallarines con carne molida',
      imagen: 'assets/comidas/Tallarinesconcarne.jpg',
      ingrediente: '1 paquete de tallarines | 1 bolsita de salsa de tomate | 1 caja de carne molida | sal y aliño',
      preparacion: 'Hervir agua en una olla y cuando este hervida colocar los tallarines, esperar a que esten blandos, cuando lo esten, colar para quitar el agua y apartarlos, luego en un sarten, echar aceite y luego la carne molida, revolver la carne mientras se va cocinando, echar condimentos como la sal o echar lo que quieras, es a eleccion, luego de eso, echar la salsa de tomate en la carne molida, despues, verter los tallarines y la carne molida en la olla y revolver y listo'
    },
    {
      titulo: 'Pure con pollo',
      imagen: 'assets/comidas/purepollo2.jpg',
      ingrediente: 'PARA EL PURE: 4 a 5 papas | 1 yema de huevo | 1 chucharada de mantequilla | 1 taza de leche | sal | PARA EL POLLO: 2 filete de pollo | media cebolla | 2 zanahorias | 3 cucharadas de aceite de oliva | 2 dientes ajo picados finitos | 1 taza caldo maggie | media taza de vino blanco | condimentos a gusto',
      preparacion: 'PARA EL PURE: lavar las papas, pelarlas, cortaslas en cubos y cocerlas, luego de cocerlas molerlas y agregar mantequilla, sal, leche y la yema de huevo y mezclar todo. El pollo debe condimentarse a gusto y luego, con el aceite de oliva, en una olla caliente, dorar los filetes por ambos lados y luego retirarlos, agregar a la olla la cebolla cortada en pluma y las zanahorias rebanadas cocinar por unos minutos, luego añadir el pollo previamente dorado, mezclar, añadir orégano y añadir la taza de caldo maggie y el vino, leugo de todo eso, servir todo junto en un plato'
    }
  ];

  // Array para las recetas filtradas
  recetasFiltradas: any[] = [];

  constructor() {}

  // Inicializamos el array de recetas filtradas al cargar la página
  ngOnInit() {
    this.recetasFiltradas = this.recetas;
  }

  // Función para filtrar las recetas según el título
  buscarRecetas(event: any) {
    const textoBusqueda = event.target.value.toLowerCase();  // Obtener el texto ingresado y convertir a minúsculas
    if (textoBusqueda && textoBusqueda.trim() !== '') {
      // Filtrar las recetas que coincidan con el título
      this.recetasFiltradas = this.recetas.filter(receta => {
        return receta.titulo.toLowerCase().includes(textoBusqueda);
      });
    } else {
      // Si no hay texto en la búsqueda, mostrar todas las recetas
      this.recetasFiltradas = this.recetas;
    }
  }

}
