<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Puertos de comunicación
    .row.mb-5.justify-content-between
      .col-lg-6
        p Los puertos de comunicación son interfaces a través de la cual los diferentes dispositivos que intervienen en una comunicación de red pueden enviar y recibir diferentes tipos de datos, los puertos pueden ser de tipo físico (hardware) o lógicos (software).
          br
          br
          |Los puertos físicos permiten la conexión de diferentes componentes tanto internos como externos los que se llaman comúnmente periféricos; los puertos lógicos son aquellos que utilizan un espacio de la memoria principal del dispositivo (RAM) que se asocia con un puerto físico o un canal de comunicación, y que proporciona un espacio para el almacenamiento temporal de la información que se va a transferir entre la localización de memoria y el canal de comunicación.
      .col-lg-5
        figure
          img(src='@/assets/curso/img14.jpg', alt='Texto que describa la imagen')
    .titulo-sexto.color-acento-contenido
          h5 Algunos puertos de comunicación con servicios de Red comunes.
    .row.mb-5.justify-content-center
      .col-lg-10
        figure
          img(src='@/assets/curso/img15.svg', alt='Texto que describa la imagen')
          figcaption Fuente: SENA, 2021
    p.mb-5 Para que se establezca una comunicación entre un origen y un destino se requiere entonces que tanto el emisor como el receptor utilicen el mismo protocolo de comunicaciones, pero además se requiere de un puerto de comunicación que facilite que los datos enviados desde el origen vayan por un canal exclusivo, por ejemplo, en la figura 5. Se muestra como el servicio web que corresponde al protocolo HTTP utiliza como interfaz o canal de comunicación el puerto 80.
    


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
