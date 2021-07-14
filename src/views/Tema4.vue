<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Puertos de comunicación
    .tarjeta.color-azul.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/img34.svg")

        .col-md.col-lg-6
          h3 Puertos de comunicación
          p.mb-4 Los puertos físicos permiten la conexión de diferentes componentes tanto internos como externos los que se llaman comúnmente periféricos.
          a.boton.color-acento-contenido(:href="obtenerLink('/downloads/puertos_de_comunicacion.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    .titulo-sexto.color-acento-contenido
          h5 Algunos puertos de comunicación con servicios de Red comunes.
    .row.mb-5.justify-content-center
      .col-lg-10
        figure
          img(src='@/assets/curso/img15.svg', alt='Texto que describa la imagen')
          figcaption SENA, 2021
    p.mb-5 Para que se establezca una comunicación entre un origen y un destino se requiere entonces, que tanto el emisor como el receptor utilicen el mismo protocolo de comunicaciones, pero además, se requiere de un puerto de comunicación que facilite que los datos enviados desde el origen vayan por un canal exclusivo, por ejemplo, en la figura anterior, se muestra cómo el servicio web que corresponde al protocolo HTTP utiliza como interfaz o canal de comunicación el puerto 80.
    


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
