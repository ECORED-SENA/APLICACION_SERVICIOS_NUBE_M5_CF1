<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    //Muestras
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Definición y generalidades de redes de datos
    .row.justify-content-center
      .col-lg-10
        .ajuste-bf-bloque
          .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.bg-img
            .row.m-0.align-items-center.justify-content-between
              .col-lg-3.mb-4.mb-lg-0
                h2.mb-0  
              .col-lg-9
                .bloque-texto-a__texto.p-4
                  p Las redes de datos son la interconexión de dos o más dispositivos conectados entre sí, a través de un medio de transmisión, con el propósito de compartir recursos e información. Una definición más formal de una red de datos o red de computadores es un conjunto de equipos (computadoras y dispositivos), conectados por medio de cables, señales, ondas o cualquier otro método de transporte de datos, para compartir información (archivos), recursos (discos, impresoras, programas, etc.) y servicios (acceso a una base de datos, internet, correo electrónico, chat, juegos, etc.). A cada una de las computadoras conectadas a la red se le denomina un nodo (Mansilla, 2015).
    p.mb-5 Las redes de datos tienen por función potenciar e incrementar la productividad de las organizaciones al permitir que todos los dispositivos que se encuentran conectados puedan acceder a los recursos que se encuentran compartidos. En los últimos años la tecnología ha entrado a jugar un papel preponderante en el desarrollo y evolución de las organizaciones; cada vez está más inmersa en todos los procesos y actividades empresariales, personales y cotidianas.
      br
      br
      | Las redes han permitido que los servicios y el acceso a estos recursos sea cada vez más necesario, ya que se requiere tener en todo momento trabajo en equipo, colaborativo y la integración entre los diferentes recursos tecnológicos, esto es lo que se conoce como networking.
      br
      br
      | Para que las redes puedan interconectarse y trabajar en red, se requiere de una serie de componentes desde el punto de vista físico y lógico, dentro de los cuales se destacan los siguientes:
    img(src='@/assets/curso/img2.svg', alt='Texto que describa la imagen')






</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
