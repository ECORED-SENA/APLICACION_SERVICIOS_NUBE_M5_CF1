<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Protocolos de comunicación
    .row.justify-content-between.mb-5
      .col-lg-5
        .cajon.color-acento-contenido.p-5.mb-4
          p Las comunicaciones en general requieren de una serie de elementos y actores que intervienen, dentro de los cuales se pueden encontrar, el emisor, que es el encargado del origen del mensaje, en este se relacionan las personas o los dispositivos; el destino, quien es el receptor del mensaje y también se constituye de personas o dispositivos; el canal, que son los medios por lo que el mensaje viaja; el código, cuyo lenguaje es utilizado para formar el mensaje; y por último, precisamente, se tiene el mensaje que es el elemento a transmitir.  
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 2. Elementos de una comunicación
        figure
          img(src='@/assets/curso/img10.svg', alt='Texto que describa la imagen')
          figcaption Fuente: SENA, 2021.
    p.mb-5 Como se evidencia en la figura anterior, toda comunicación debe contar con un emisor, un mensaje a enviar y un código que permite que el mensaje viaje por un canal. Para que ambos actores puedan interactuar se requiere contar con un código o lenguaje común, el cual permite que se puedan entender; ese estándar o lenguaje común, es lo que conocemos como un protocolo de comunicaciones, el cual es un conjunto de normas que están obligadas a cumplir todos los dispositivos, hardware y software que intervienen en una comunicación de datos entre computadoras y demás dispositivos, sin estas reglas o estándares la comunicación resultaría caótica y por tanto imposible.
      br
      br
      |Dependiendo de los servicios a los cuales accedemos a través de las redes de computadores, se define el protocolo de comunicación que se deberá emplear en la interacción entre el usuario que solicita y accede al servicio, y el dispositivo que se lo entrega; en general en la transmisión y recepción de los datos podemos encontrar dos grandes familias de protocolos que se resumen en:
    .titulo-sexto.color-acento-contenido
      h5 Figura 3. Protocolos de conexión
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/img11.svg', alt='Texto que describa la imagen')
          
        h2.text-center Protocolos orientados a la<br>conexión
        p Requieren un modo de comunicación de redes donde se debe establecer una conexión antes de transferir datos. Se identifica el flujo de tráfico con un identificador de conexión en lugar de utilizar explícitamente las direcciones de la fuente y el destino.
          br
          br
          |Se dice que un servicio de comunicación entre dos dispositivos está orientado a conexión cuando antes de iniciar la comunicación se valida el cumplimiento de ciertas variables como (disponibilidad, alcance, origen, destino, etc.) entre estos dispositivos y se negocian unas credenciales para hacer esta conexión más segura y eficiente.

      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/img12.svg', alt='Texto que describa la imagen')
          
        h2.text-center Protocolos no orientados a la<br>conexión
        p Permite una comunicación entre dos puntos finales de una red en los que un mensaje puede ser enviado desde un punto inicial o de origen a otro punto o dispositivo de la red sin acuerdo previo. El dispositivo en un extremo de la comunicación transmite los datos al otro, sin tener que asegurarse de que el receptor esté disponible y listo para recibir los datos. El emisor simplemente envía un mensaje dirigido al receptor.
      figcaption.mt-3 Fuente: SENA, 2021
    p.mb-5 A continuación, se evidencian algunos ejemplos de los protocolos que son usados en los servicios que normalmente se utilizan en la comunicación entre las redes de datos.
    .titulo-sexto.color-acento-contenido
      h5 Figura 4. Suite de Protocolos según el modelo de referencia.
    figure
      img.mb-3(src='@/assets/curso/img13.svg', alt='Texto que describa la imagen')
      figcaption Fuente: SENA, 2021.










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
