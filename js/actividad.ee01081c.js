(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"055a":function(e,a,t){e.exports=t.p+"img/2.82187fe5.png"},"0b0d":function(e,a,t){"use strict";t("4cb3")},"25c1":function(e,a,t){e.exports=t.p+"img/4.ab7c36c7.png"},"27ba":function(e,a,t){},4298:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e._self._c;return a("div",{staticClass:"curso-main-container pb-3"},[a("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a("div",{attrs:{id:"Actividad"}},[a("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},r=[],i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"tarjeta--blanca"},[a("div",{staticClass:"row align-items-center mb-4"},[e._m(0),a("div",{staticClass:"col"},[a("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),a("p",{staticClass:"mb-0"},[e._v(" "+e._s(e.cuestionario.introduccion)+" ")])])]),a("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?a("ActividadResultados",{attrs:{respuestas:e.respuestas}}):a("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),a("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},o=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"col-auto"},[a("img",{attrs:{src:t("8da0"),alt:""}})])}],c=(t("14d9"),function(){var e=this,a=e._self._c;return a("div",[a("p",{staticClass:"mb-4 pb-4"},[a("b",[e._v(e._s(e.pregunta.texto))])]),a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col-5"},[a("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),a("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(t,s){return a("div",{key:t.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":s!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":t.correcta,"tarjeta-respuesta--incorrecta":t.incorrecta,"tarjeta-respuesta--disabled":t.disabled},on:{click:function(a){return e.onRespuestaSelected(t)}}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===t.id?t.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),a("div",{staticClass:"col"},[e._v(" "+e._s(t.texto)+" ")])])])})),0)]),e.respuestaSelected.id?[a("hr"),e.respuestaSelected.esCorrecta?a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),n=[],u={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:()=>({respuestaSelected:{}}),computed:{opcionesComputed(){if(!this.pregunta.opciones.length)return[];const e=this.respuestaSelected.id;return this.pregunta.opciones.map(a=>({...a,correcta:e===a.id&&a.esCorrecta,incorrecta:e===a.id&&!a.esCorrecta,disabled:!!e}))}},watch:{pregunta(){this.respuestaSelected={}}},methods:{onRespuestaSelected(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},d=u,l=(t("5c20"),t("2877")),p=Object(l["a"])(d,c,n,!1,null,"4a5e71aa",null),m=p.exports,v=function(){var e=this,a=e._self._c;return a("div",{staticClass:"tarjeta-avance"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col"},[a("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[a("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),a("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),a("div",{staticClass:"col-auto"},[e.respuestasLength===e.preguntasCount?a("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(a){return e.$emit("reiniciar")}}},[a("span",[e._v("Reiniciar")])]):a("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(a){return e.$emit("continuar")}}},[a("span",[e._v("Continuar")]),a("i",{staticClass:"fas fa-arrow-right"})])])])])},b=[],g={name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0}},computed:{avanceWidth(){return(this.preguntaIndex+1)/this.preguntasCount*100+"%"}}},C=g,x=(t("c2dc"),Object(l["a"])(C,v,b,!1,null,"7a0121ad",null)),_=x.exports,f=function(){var e=this,a=e._self._c;return a("div",{staticClass:"row align-items-center justify-content-around"},[a("div",{staticClass:"col-5"},[(e.aprobado,a("img",{attrs:{src:t("a46c"),alt:""}}))]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"d-flex align-items-center flex-column"},[a("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[a("h3",[e._v("¡BUEN TRABAJO!")]),a("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[a("h3",[e._v("VUELVE A INTENTARLO")]),a("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],a("hr",{staticClass:"w-100"}),a("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},h=[],j={name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(a=>{a.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e},aprobado(){return this.rtas.porcentaje>=70}}},y=j,A=(t("4d40"),Object(l["a"])(y,f,h,!1,null,"360ec089",null)),S=A.exports,R={name:"Actividad",components:{ActividadPregunta:m,ActividadBarraAvance:_,ActividadResultados:S},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:()=>({intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}),computed:{preguntas(){const{preguntas:e,barajarPreguntas:a}=this.cuestionario;if(!e)return[];const t=a?this.shuffle(e):e;return t.map(e=>({...e,opciones:e.barajarRespuestas?this.shuffle(e.opciones):e.opciones,intentos:this.intentos}))},preguntaSelected(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle(e){let a,t=e.length;while(t>0)a=Math.floor(Math.random()*t),t--,[e[t],e[a]]=[e[a],e[t]];return e},onRrespuestaSelected(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar(){if(this.continuarDisabled=!0,this.respuestaActual.id){const e=this.respuestas.findIndex(e=>e.id===this.preguntaSelected.id);-1===e?this.respuestas.push(this.respuestaActual):this.respuestas[e]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},L=R,E=(t("0b0d"),Object(l["a"])(L,i,o,!1,null,"1bb53ccc",null)),w=E.exports,I={name:"ActividadDidactica",components:{Actividad:w},data:()=>({cuestionario:{tema:"Evolución del espacio rural y la nueva ruralidad",titulo:"Cuestionario",introduccion:"Identificar los conceptos clave relacionados con la evolución del espacio rural, la nueva ruralidad, la multifuncionalidad del suelo, y la interdependencia entre lo rural y lo urbano.",barajarPreguntas:!1,preguntas:[{id:1,texto:"¿Qué concepto ha evolucionado para incluir nuevas funciones como la conservación ambiental y el turismo?",imagen:t("46d4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Nueva ruralidad.",esCorrecta:!0},{id:"b",texto:"Pluriactividad.",esCorrecta:!1},{id:"c",texto:"Espacio potencial.",esCorrecta:!1},{id:"d",texto:"Descentralización.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"¿Cuál es una de las principales funciones del espacio rural según la nueva ruralidad?",imagen:t("055a"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Solo la producción agrícola.",esCorrecta:!1},{id:"b",texto:"Garantizar la conservación del ambiente.",esCorrecta:!0},{id:"c",texto:"Exclusivamente la pesca.",esCorrecta:!1},{id:"d",texto:"La industrialización urbana.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"¿Qué se entiende por multifuncionalidad en el contexto de la nueva ruralidad?",imagen:t("875f"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Uso exclusivo para la agricultura.",esCorrecta:!1},{id:"b",texto:"Uso diversificado del suelo para diferentes actividades.",esCorrecta:!0},{id:"c",texto:"Creación de espacios urbanos.",esCorrecta:!1},{id:"d",texto:"Descentralización política.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"¿Qué tipo de espacio se caracteriza por ser creado y adaptado por el ser humano?",imagen:t("25c1"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Espacio potencial.",esCorrecta:!1},{id:"b",texto:"Espacio artificial.",esCorrecta:!0},{id:"c",texto:"Espacio natural virgen.",esCorrecta:!1},{id:"d",texto:"Espacio turístico.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"¿Qué tipo de actividades se incluyen en el empleo rural no agrícola?",imagen:t("46d4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Solo agricultura.",esCorrecta:!1},{id:"b",texto:"Actividades manufactureras y servicios diversos.",esCorrecta:!0},{id:"c",texto:"Exclusivamente turismo.",esCorrecta:!1},{id:"d",texto:"Extracción de recursos naturales.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"¿Cuál es una de las funciones clave del espacio rural para mejorar la calidad de vida?",imagen:t("055a"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Proveer espacios para la recreación y esparcimiento al aire libre.",esCorrecta:!0},{id:"b",texto:"Incrementar la industrialización agrícola.",esCorrecta:!1},{id:"c",texto:"Desarrollar más áreas urbanas.",esCorrecta:!1},{id:"d",texto:"Exclusivamente la minería.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"¿Qué se entiende por equilibrio territorial?",imagen:t("875f"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Exclusivo crecimiento urbano.",esCorrecta:!1},{id:"b",texto:"Lograr la fijación de la población rural y frenar el despoblamiento.",esCorrecta:!0},{id:"c",texto:"Expansión de las ciudades al campo.",esCorrecta:!1},{id:"d",texto:"Aumento de la producción agrícola.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"¿Qué se busca con la pluriactividad en el espacio rural?",imagen:t("25c1"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Diversificar las actividades económicas más allá de la agricultura.",esCorrecta:!0},{id:"b",texto:"Reducir el turismo en áreas rurales.",esCorrecta:!1},{id:"c",texto:"Limitar el uso del suelo.",esCorrecta:!1},{id:"d",texto:"Aumentar la producción agrícola.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"¿Cuál es un ejemplo de espacio natural virgen?",imagen:t("46d4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Parques naturales o áreas protegidas.",esCorrecta:!0},{id:"b",texto:"Áreas urbanas.",esCorrecta:!1},{id:"c",texto:"Espacios artificiales.",esCorrecta:!1},{id:"d",texto:"Regiones dormitorio.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"¿Qué aspecto es clave en la relación entre lo rural y lo urbano para el desarrollo regional?",imagen:t("055a"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Exclusivamente la agricultura.",esCorrecta:!1},{id:"b",texto:"La interdependencia y colaboración entre ambos espacios.",esCorrecta:!0},{id:"c",texto:"La migración masiva a las ciudades.",esCorrecta:!1},{id:"d",texto:"La eliminación de áreas rurales.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Excelente! Ha superado la actividad.",mensaje_final_reprobado:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}}),computed:{},methods:{}},M=I,D=Object(l["a"])(M,s,r,!1,null,null,null);a["default"]=D.exports},"46d4":function(e,a,t){e.exports=t.p+"img/1.afbc9545.png"},"4cb3":function(e,a,t){},"4d40":function(e,a,t){"use strict";t("27ba")},"5c20":function(e,a,t){"use strict";t("8199")},8199:function(e,a,t){},"875f":function(e,a,t){e.exports=t.p+"img/3.f43daae0.png"},"8da0":function(e,a,t){e.exports=t.p+"img/icon-actividad.3d896e1e.svg"},a46c:function(e,a,t){e.exports=t.p+"img/cuestionario-resultado.a5584db8.svg"},c2dc:function(e,a,t){"use strict";t("f4e0")},f4e0:function(e,a,t){}}]);
//# sourceMappingURL=actividad.ee01081c.js.map