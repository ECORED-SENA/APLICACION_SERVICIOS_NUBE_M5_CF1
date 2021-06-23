<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-5 En este material se estudiarán los principios básicos de las redes de datos, sus componentes tanto físicos como lógicos, su interacción y comunicación. La fundamentación facilitará el acceso a recursos compartidos, incrementando su productividad. Se conocerá la definición y generalidades de las redes de datos, en la cual se comprenderá por qué son importantes, así mismo se abordará los diferentes modelos de referencia, como lo son: ISO, IEEE, OSI, ANSI, EIA, TIA, UIT. Se llegará a los protocolos de comunicación donde se conocerá sobre el emisor, destino, canal, código y mensaje, lo que permite que haya un ciclo adecuado en la comunicación.
      br
      br
      | Es igual importante trabajar en el conocimiento de los puertos de comunicación, donde se identificará el hardware y el software; así mismo se abordará los medios de transmisión para reconocer los medios guiados como la fibra óptica y el cobre. De esta manera, el recorrido académico finalizará en los recursos compartidos que facilitará el trabajo que se realiza en red.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
