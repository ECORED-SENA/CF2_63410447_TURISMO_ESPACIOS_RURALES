<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bgi.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            p(data-aos="fade-down").mb-4 El espacio rural ha evolucionado significativamente, dejando atrás su exclusiva asociación con la agricultura para incorporar nuevas funciones y actividades que responden a las demandas de las sociedades modernas. Este cambio ha llevado a una redefinición de lo rural, que ahora incluye aspectos como la conservación ambiental, el turismo y la multifuncionalidad del territorio.
            .row.justify-content-center.align-items-center      
              .col-lg-7.my-3.order-1 
                .bg1.brad.p-4.mb-4.text-white              
                  p(data-aos="fade-down").mb-0 La nueva ruralidad enfatiza la importancia de mantener y revitalizar las áreas rurales, promoviendo un uso sostenible de los recursos naturales y fomentando actividades económicas diversas. Este enfoque busca mejorar la calidad de vida en las zonas rurales, prevenir el despoblamiento y crear oportunidades de desarrollo que beneficien tanto a las comunidades rurales como urbanas.
                .row.justify-content-center(data-aos="fade-right")
                  .col-lg-auto
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')        
                  .col.pt-md-4
                    p(data-aos="fade-down").mb-0 En este contexto, la interdependencia entre lo rural y lo urbano se vuelve crucial para lograr un desarrollo regional equilibrado y sostenible. Es necesario establecer políticas y acuerdos que reconozcan esta interconexión, permitiendo que ambos entornos prosperen y contribuyan al bienestar general de la sociedad.                
              .col-lg-5.my-3.order-lg-2            
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
