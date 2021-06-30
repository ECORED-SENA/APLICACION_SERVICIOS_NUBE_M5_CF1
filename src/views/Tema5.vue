<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Medios de transmisión
    figure.mb-5
      img(src='@/assets/curso/img16.jpg', alt='Texto que describa la imagen')
    p.mb-5 A continuación, se le invita a revisar el concepto de medios de transmisión y los tipos de medios tanto guiado como no guiados. 
      br
      br
      |Para que la comunicación entre un emisor y un receptor se realice se requiere de un medio que facilite la conexión entre ambos extremos el cual es conocido como el medio de transmisión, este constituye el soporte físico a través del cual emisor y receptor pueden comunicarse en un sistema de transmisión de datos. Los medios de transmisión se pueden categorizar en dos grandes tipos que son los medios guiados y no guiados.
      br
      br
      |Los medios guiados conducen (guían) las señales a través de un camino físico dentro de los cuales podemos encontrar:
    .row.mb-5.justify-content-center
      .col-lg-3
        figure.mb-5
          img(src='@/assets/curso/img17.svg', alt='Texto que describa la imagen')
        h4.text-center Par trenzado
      .col-lg-3
        figure.mb-5
          img(src='@/assets/curso/img18.svg', alt='Texto que describa la imagen')
        h4.text-center Coaxial
      .col-lg-3
        figure.mb-5
          img(src='@/assets/curso/img19.svg', alt='Texto que describa la imagen')
        h4.text-center Fibra Óptica
    p.mb-5 Las señales que transportan cada medio son distintas por ejemplo en la fibra óptica los que se lleva son pulsos de luz, no eléctricos, mientras que el cobre transporta impulsos eléctricos.
      br
      br
      |Los medios de transmisión no guiados son aquellos cables que transportan ondas electromagnéticas sin usar un conductor físico, sino que se radian a través del aire, por lo que están disponibles para cualquiera que tenga un dispositivo capaz de aceptarlas. Normalmente utilizan el aire como el medio a través del cual viajan las señales en frecuencias electromagnéticas, por lo que generalmente requieren de una antena que permita transmitir y recibir datos de diferentes tipos.
      br
      br
      |Dentro de los medios de transmisión no guiados se puede encontrar:
    .row.mb-1.justify-content-center
      .col-lg-4
        .tarjeta-iconos.amarillo-claro.p-3.d-flex.m-3
          img(src='@/assets/curso/img20.svg', alt='Texto que describa la imagen')
          h4.ms-5.ps-5.py-3.mb-0.text-center Radiofrecuencias
      .col-lg-4
        .tarjeta-iconos.amarillo-claro.p-3.d-flex.m-3
          img(src='@/assets/curso/img21.svg', alt='Texto que describa la imagen')
          h4.ms-5.ps-5.py-3.mb-0.text-center Microondas
      .col-lg-4
        .tarjeta-iconos.amarillo-claro.p-3.d-flex.m-3
          img(src='@/assets/curso/img22.svg', alt='Texto que describa la imagen')
          h4.ms-5.ps-5.py-3.mb-0.text-center Infrarrojos
    .row.mb-5.justify-content-center
      .col-lg-4
        .tarjeta-iconos.amarillo-claro.p-3.d-flex.m-3
          img(src='@/assets/curso/img23.svg', alt='Texto que describa la imagen')
          h4.ms-5.ps-5.py-3.mb-0.text-center Bluetooth
      .col-lg-4
        .tarjeta-iconos.amarillo-claro.p-3.d-flex.m-3
          img(src='@/assets/curso/img24.svg', alt='Texto que describa la imagen')
          h4.ms-5.ps-5.py-3.mb-0.text-center Wifi
      .col-lg-4
        .tarjeta-iconos.amarillo-claro.p-3.d-flex.m-3
          img(src='@/assets/curso/img25.svg', alt='Texto que describa la imagen')
          h4.ms-5.ps-5.py-3.mb-0.text-center Satelital















</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
