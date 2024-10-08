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
    },
    {
      titulo: 'Lomo salteado',
      imagen: 'assets/comidas/lomosaltado.jpg',
      ingrediente: '1 libra de solomillo de res cortado en rodajas finas | 2 dientes de ajo picados | sal al gusto | pimienta al gusto | 1 taza de arroz blanco regular de grano largo crudo | 2 tazas de papas fritas congeladas | 3 cucharadas de aceite vegetal | 1 cebolla morada pequeña cortada en rodajas gruesas | 2 tomates roma cortados en rodajas gruesas | 2 cucharadas cafeteras de pasta de ají amarillo | 2 cucharadas de salsa de soya | 3 cucharadas de vinagre de vino tinto | 1/3 de taza de caldo de res | 1/2 taza de cilantro picado.',
      preparacion: 'Cocina el arroz en agua con sal, fríe las papas hasta que estén doradas, en una sartén calienta el aceite y saltea el solomillo con ajo, sal y pimienta, retira la carne'
    },
    {
      titulo: 'Lasaña',
      imagen: 'assets/comidas/lasaña.jpg',
      ingrediente: '12 láminas de pasta para lasaña | 500 g de carne molida de res | 1 cebolla picada | 2 dientes de ajo picados | 400 g de salsa de tomate | 1 cucharadita de orégano | 1 cucharadita de albahaca | 200 g de queso mozzarella rallado | 100 g de queso parmesano rallado | 500 ml de salsa bechamel | 2 cucharadas de aceite de oliva | sal al gusto | pimienta al gusto.',
      preparacion: 'Cocina las láminas de lasaña, sofríe la cebolla y el ajo, añade la carne y cocina hasta dorar, agrega la salsa de tomate, orégano, albahaca, sal y pimienta, cocina a fuego lento por 10-15 minutos, en un molde alterna capas de salsa de carne, láminas de lasaña, salsa bechamel y queso mozzarella, repite hasta terminar con bechamel y queso parmesano, hornea a 180°C por 30-40 minutos, deja reposar antes de servir.'
    },
    {
      titulo: 'Empanada de pino',
      imagen: 'assets/comidas/empanadadepino.jpg',
      ingrediente: '500 g de carne molida de res | 1 cebolla grande picada | 2 huevos duros picados | 1/2 taza de aceitunas negras picadas | 1/2 cucharadita de comino | 1/2 cucharadita de orégano | sal al gusto | pimienta al gusto | masa para empanadas | aceite para freír o pintar.',
      preparacion: 'Sofríe la cebolla hasta dorar, agrega la carne molida y cocina bien, añade comino, orégano, sal y pimienta, cocina por 10 minutos más, deja enfriar el pino, extiende la masa y coloca una porción de pino en el centro, agrega un trozo de huevo duro y una aceituna, cierra la empanada y sella bien los bordes, pinta con aceite o huevo batido, hornea a 180°C por 25-30 minutos o hasta que estén doradas.'
    },
    {
      titulo: 'Sushi frito de pollo',
      imagen: 'assets/comidas/sushifritodepollo.jpg',
      ingrediente: '2 tazas de arroz para sushi | 2 1/2 tazas de agua | 1/4 taza de vinagre de arroz | 1 cucharada de azúcar | 1/2 cucharadita de sal | 300 g de pechuga de pollo cocida y desmenuzada | 1/2 taza de mayonesa | 1 cucharada de salsa de soya | 1 cucharadita de wasabi (opcional) | nori (alga para sushi) | aceite para freír | pan rallado para empanizar | salsa teriyaki o salsa de soya para acompañar.',
      preparacion: 'Cocina el arroz con agua, mezcla el vinagre, azúcar y sal al arroz enfriado, combina el pollo con mayonesa, salsa de soya y wasabi, extiende arroz sobre una hoja de nori, coloca la mezcla de pollo en el centro, enrolla y corta en porciones, empaniza con pan rallado, fríe en aceite caliente hasta dorar, y sirve con salsa teriyaki o salsa de soya.'
    },
    {
      titulo: 'Churrasco chacarero',
      imagen: 'assets/comidas/chacarero.jpg',
      ingrediente: '500 g de carne de res | 1 pan francés o marraqueta | 1 tomate en rodajas | 1/2 palta (aguacate) en rodajas | 1/2 cebolla en rodajas finas | 1 ají verde (opcional, en rodajas o tiras) | 1 cucharada de mayonesa (opcional) | sal al gusto | pimienta al gusto | aceite para cocinar la carne..',
      preparacion: 'Sazona la carne con sal y pimienta, cocina la carne en una sartén con aceite al gusto hasta que esté dorada, retira y deja reposar, corta el pan por la mitad y tuéstalo ligeramente si lo deseas, coloca la carne en el pan, agrega rodajas de tomate, palta, cebolla y ají verde, añade mayonesa si lo prefieres, cierra el sándwich y sirve caliente.'

    },
    {
      titulo: 'Pastel de choclo',
      imagen: 'assets/comidas/pasteldechoclo.jpg',
      ingrediente: '6 choclos chilenos| 4 presas de pollo| 150 gramos de posta de vacuno molida o picada| 30 gramos de azúcar granulada| 2 cebollas| 1 taza de leche| 2 dientes de ajo| 8 aceitunas negras| 3 huevos duros| 8 pasas rubias|20 gramos de mantequilla| Aceite de maravilla| Sal| Pimienta negra molida| 1 manojo pequeño de albahaca.',
      preparacion: 'En una sartén grande, calienta 1 cucharada de aceite de oliva a fuego medio. Agrega 1 cebolla grande picada y 1 pimiento rojo picado, y cocina hasta que estén tiernos (unos 5-7 minutos). Luego, incorpora 500 g de carne molida y cocina hasta que esté dorada, desmenuzando la carne mientras se cocina. Añade sal, pimienta, comino y orégano al gusto, mezclando bien. Agrega 2 huevos duros picados, 1 taza de aceitunas negras picadas y 1 taza de maíz. Remueve y cocina por unos minutos más. Retira del fuego y deja enfriar. En una licuadora, coloca 4 tazas de granos de choclo, 1/2 taza de leche, 2 cucharadas de mantequilla, 1 huevo, 1 cucharada de azúcar (si lo deseas), sal y 1/2 cucharadita de pimienta. Licúa hasta obtener una mezcla suave. Si está muy espesa, agrega un poco más de leche. Precalienta el horno a 180°C (350°F). En un molde para horno, coloca la mezcla de carne como base. Vierte la mezcla de choclo encima, cubriendo el relleno. Lleva al horno y cocina durante aproximadamente 30-40 minutos, o hasta que la parte superior esté dorada y firme al tacto .Una vez listo, deja reposar unos minutos antes de cortar. Sirve caliente.'

    },
    {
      titulo: 'Chorrillana',
      imagen: 'assets/comidas/chorrillana.jpg',
      ingrediente: '4-5 papas grandes (para hacer las fritas) | 500 g de carne de res (lomo, asado o cualquier carne para guisar), cortada en tiras o trozos pequeños | 1-2 cebollas grandes, cortadas en plumas | 2-4 huevos (opcional) | Aceite (para freír las papas y la carne) | Sal y pimienta (al gusto) | 1 cucharadita de ají de color (pimentón) (opcional) | 1/2 cucharadita de comino (opcional) | Salsa de merquén o ají verde (para acompañar, opcional) | 200 g de chorizo o longaniza, en rodajas (opcional) | Pimientos, cortados en tiras (opcional).',
      preparacion: 'Pela las papas y córtalas en bastones. Fríelas en harta aceite hasta que queden doradas y crujientes. En la misma sartén, cocina la carne hasta dorarla y sazona con sal, pimienta, ají de color y comino. Retira y sofríe las cebollas hasta que estén tiernas, luego agrega el chorizo (opcional) hasta dorar. Fríe los huevos al gusto. En un plato grande, pon las papas fritas, añade la carne y cebollas, y finaliza con los huevos. Sirve caliente con merquén o ají verde al lado.'
    },
    {
      titulo: 'Charquican',
      imagen: 'assets/comidas/charquican.jpg',
      ingrediente: '400 g de carne (charque, carne de res o pollo), cocida y desmenuzada | 3-4 papas grandes, peladas y cortadas en cubos | 200 g de zapallo (zapallo italiano o butternut), cortado en cubos | 1 cebolla grande, picada en cubos | 1-2 zanahorias, peladas y cortadas en cubos | 2 dientes de ajo, picados (opcional) | 1/2 cucharadita de comino (opcional) | Un puñado de perejil fresco, picado | Aceite (para sofreír) | Sal y pimienta (al gusto) | 2 tazas de caldo de carne o agua (ajustar según la consistencia deseada) | 1 taza de arvejas (frescas o congeladas, opcional) | Huevo duro (para decorar, opcional).',
      preparacion: 'Calienta aceite en una olla, sofríe la cebolla y el ajo hasta que estén transparentes, añade las zanahorias, papas y zapallo, mezcla bien, agrega la carne desmenuzada y el comino, cocina por unos minutos, vierte caldo o agua suficiente para cubrir, lleva a ebullición, luego reduce el fuego y cocina a fuego lento hasta que las verduras estén tiernas (20-30 minutos), ajusta sal y pimienta, agrega arvejas (si las usas) y cocina por unos minutos más, espolvorea con perejil picado antes de servir y decora con huevo duro (opcional).'
    },
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
