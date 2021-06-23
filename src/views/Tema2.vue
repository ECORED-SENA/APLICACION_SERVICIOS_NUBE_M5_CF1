<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Modelos de referencia
    .row.mb-5.justify-content-between
      .col-lg-6
        p Los modelos de referencia se basan en la definición de una serie de capas las cuales tienen cada una sus propias funciones y características que se encargan de resolver un problema diferente en la comunicación, cada fase tiene un orden específico y cada una se sustenta en la capa anterior. 
          br
          br
          |Los modelos de referencia tienen como propósito asistir en la comprensión más clara y sencilla de las funciones y los procesos involucrados en la interconexión de los diferentes dispositivos de red, para ello se establecen una serie de capas, que más que entrar en los detalles de las especificaciones técnicas requeridas en cada una de ellas, el modelo de referencia ayuda en la comprensión de lo que sucede, ayudando a lograr un mejor entendimiento de las funciones y procesos involucrados.
          br
          br
          |Al inicio del desarrollo de la tecnología y más propiamente de la computación, los diferentes fabricantes construían sus equipos y dispositivos para que fueran compatibles con dispositivos de sus propias marcas, lo que no facilitaba la interconexión de equipos y dispositivos de fabricantes distintos. Esto llevó a la necesidad de estandarizar de manera que se permita la interconexión de una amplia gama de dispositivos sin importar fabricante o tipo de software. Para que el intercambio de información sea posible se requiere el establecimiento de una serie de estándares.
      .col-lg-5
        figure
          img(src='@/assets/curso/img3.jpg', alt='Texto que describa la imagen')
    p.mb-5 Estos estándares son construidos por una serie de organizaciones:
    .row.mb-1.justify-content-center
      .col-lg-6
        .size-img
          .tarjeta-avatar-b.size-img.mb-3
            img(src='@/assets/curso/img4.svg' alt='AvatarTop' style='width: 102px')
            .tarjeta.tarjeta--gris
              .p-4.py-5
                h5.mb-0 International Standards Organization 
      .col-lg-6
        .size-img
          .tarjeta-avatar-b.size-img.mb-3
            img(src='@/assets/curso/img5.svg' alt='AvatarTop')
            .tarjeta.tarjeta--gris
              .p-4.py-5
                h5.mb-0 Instituto de ingenieros electrónicos y eléctricos 
    .row.mb-1.justify-content-center
      .col-lg-6
        .size-img
          .tarjeta-avatar-b.size-img.mb-3
            img(src='@/assets/curso/img6.svg' alt='AvatarTop')
            .tarjeta.tarjeta--gris
              .p-4.py-5
                h5.mb-0 Instituto Nacional Americano de Normalización
      .col-lg-6
        .size-img
          .tarjeta-avatar-b.size-img.mb-3
            img(src='@/assets/curso/img7.svg' alt='AvatarTop')
            .tarjeta.tarjeta--gris
              .p-4.py-5
                h5.mb-0 Asociación de Industrias Electrónicas
    .row.mb-5.justify-content-center
      .col-lg-6
        .size-img
          .tarjeta-avatar-b.size-img.mb-3
            img(src='@/assets/curso/img8.svg' alt='AvatarTop')
            .tarjeta.tarjeta--gris
              .p-4.py-5
                h5.mb-0 Asociación de Industrias Telecomunicaciones
      .col-lg-6
        .size-img
          .tarjeta-avatar-b.size-img.mb-3
            img(src='@/assets/curso/img9.svg' alt='AvatarTop')
            .tarjeta.tarjeta--gris
              .p-4.py-5
                h5.mb-0 Unión Internacional de Telecomunicaciones
    p.mb-5 ISO definió un modelo de referencia como estándar para posibilitar las comunicaciones electrónicas a nivel global, conocido como el modelo OSI (Interconexión de Sistemas Abiertos). Para el caso de IEEE, es el organismo encargado de fijar los estándares para los elementos físicos de una red, cables, conectores e interfaces.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
