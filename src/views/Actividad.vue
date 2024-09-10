<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Evolución del espacio rural y la nueva ruralidad',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar los conceptos clave relacionados con la evolución del espacio rural, la nueva ruralidad, la multifuncionalidad del suelo, y la interdependencia entre lo rural y lo urbano.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué concepto ha evolucionado para incluir nuevas funciones como la conservación ambiental y el turismo?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Nueva ruralidad.', esCorrecta: true },
            { id: 'b', texto: 'Pluriactividad.', esCorrecta: false },
            { id: 'c', texto: 'Espacio potencial.', esCorrecta: false },
            { id: 'd', texto: 'Descentralización.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una de las principales funciones del espacio rural según la nueva ruralidad?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo la producción agrícola.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar la conservación del ambiente.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Exclusivamente la pesca.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La industrialización urbana.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué se entiende por multifuncionalidad en el contexto de la nueva ruralidad?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso exclusivo para la agricultura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso diversificado del suelo para diferentes actividades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Creación de espacios urbanos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Descentralización política.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de espacio se caracteriza por ser creado y adaptado por el ser humano?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Espacio potencial.', esCorrecta: false },
            { id: 'b', texto: 'Espacio artificial.', esCorrecta: true },
            { id: 'c', texto: 'Espacio natural virgen.', esCorrecta: false },
            { id: 'd', texto: 'Espacio turístico.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de actividades se incluyen en el empleo rural no agrícola?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo agricultura.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Actividades manufactureras y servicios diversos.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Exclusivamente turismo.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Extracción de recursos naturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una de las funciones clave del espacio rural para mejorar la calidad de vida?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Proveer espacios para la recreación y esparcimiento al aire libre.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar la industrialización agrícola.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desarrollar más áreas urbanas.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Exclusivamente la minería.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué se entiende por equilibrio territorial?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exclusivo crecimiento urbano.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Lograr la fijación de la población rural y frenar el despoblamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Expansión de las ciudades al campo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumento de la producción agrícola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué se busca con la pluriactividad en el espacio rural?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diversificar las actividades económicas más allá de la agricultura.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir el turismo en áreas rurales.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Limitar el uso del suelo.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Aumentar la producción agrícola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es un ejemplo de espacio natural virgen?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Parques naturales o áreas protegidas.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Áreas urbanas.', esCorrecta: false },
            { id: 'c', texto: 'Espacios artificiales.', esCorrecta: false },
            { id: 'd', texto: 'Regiones dormitorio.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué aspecto es clave en la relación entre lo rural y lo urbano para el desarrollo regional?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exclusivamente la agricultura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La interdependencia y colaboración entre ambos espacios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La migración masiva a las ciudades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La eliminación de áreas rurales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
