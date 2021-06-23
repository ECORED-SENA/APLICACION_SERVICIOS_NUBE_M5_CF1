<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Recursos compartidos
    figure.mb-5
      img(src='@/assets/curso/img26.jpg', alt='Texto que describa la imagen')
    p.mb-5 Las redes de datos facilitan y potencian el trabajo en red entre los diferentes usuarios y dispositivos de tal manera que se pueda acceder a dispositivos y recursos compartidos, cuando mencionamos los recursos nos referimos a todos esos elementos tanto hardware como software que pueden compartidos y utilizados por los diferentes dispositivos conectados, estos recursos pueden ser desde el punto de vista hardware:
    .row.mb-5.justify-content-center
      .col-lg-4
        .tarjeta-iconos.amarillo-claro.p-3.d-flex.m-3
          img(src='@/assets/curso/img27.svg', alt='Texto que describa la imagen')
          h4.ms-5.ps-5.py-3.mb-0.text-center Impresora
      .col-lg-4
        .tarjeta-iconos.amarillo-claro.p-3.d-flex.m-3
          img(src='@/assets/curso/img28.svg', alt='Texto que describa la imagen')
          h4.ms-5.ps-5.py-3.mb-0.text-center Scanner
      .col-lg-4
        .tarjeta-iconos.amarillo-claro.p-3.d-flex.m-3
          img(src='@/assets/curso/img29.svg', alt='Texto que describa la imagen')
          h4.ms-5.ps-5.py-3.mb-0.text-center Almacenamiento
    p.mb-5 Desde el punto de vista lógico se puede compartir recursos como:
    .row.mb-3.justify-content-center
      .col-lg-4
        .tarjeta-iconos.amarillo-claro.p-3.d-flex.m-3
          img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen')
          h4.ms-5.ps-5.py-3.mb-0.text-center Archivos
      .col-lg-4
        .tarjeta-iconos.amarillo-claro.p-3.d-flex.m-3
          img(src='@/assets/curso/img31.svg', alt='Texto que describa la imagen')
          h4.ms-5.ps-5.py-3.mb-0.text-center Base de datos
    .row.mb-5.justify-content-center
      .col-lg-4
        .tarjeta-iconos.amarillo-claro.p-3.d-flex.m-3
          img(src='@/assets/curso/img32.svg', alt='Texto que describa la imagen')
          h4.ms-5.ps-5.py-3.mb-0.text-center Aplicaciones
      .col-lg-4
        .tarjeta-iconos.amarillo-claro.p-3.d-flex.m-3
          img(src='@/assets/curso/img33.svg', alt='Texto que describa la imagen')
          h4.ms-5.ps-5.py-3.mb-0.text-center Servicios








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
