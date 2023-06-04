"use client"
import React, {useRef, useEffect} from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Gallery from "./gallery";

export default function ScrollSection() {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);


    gsap.registerPlugin(ScrollTrigger);

    



     useEffect(() => {
      
       const pin = gsap.fromTo(sectionRef.current,{
         translateX: 0
       }, {
         translateX: "-1450vw",
         ease: "power1.out",
         duration: 3.5,
         scrollTrigger: {
           trigger: triggerRef.current,
           start: "top top",
           end: "2000 top",
	        //  markers: true,
           scrub: 1,
           pin: true,
         },
       });
    
       return () => {
         {/* Una función de retorno para matar la animación en el desmontaje del componente. */ }
       pin.kill();
       }
     }, [])
    

    return(
      <section className="scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner flex bg-[url('/images/Web-fondo.png')] xl:scroll-section-inner-pc">
            {/* HOME */}
              <div className="phone_home xl:w-screen ">
                <div className=" mt-32 mb-20 xl:w-1/3 xl:mt-16">
                      <Image className="w-screen xl:w-full" src="/images/logo1.png" width={150} height={150} alt="logo Wellgix"/>
                </div>
                <div className=" w-full text-left mb-10 sm:px-20 sm:mb-32 xl:w-1/3 xl:h-auto xl:px-10 flex flex-col">
                  <p className="sm:text-2xl xl:mb-4">Somos una empresa venezolana
                      enfocada en la operación y 
                      mantenimiento operacional de  
                      <strong> facilidades de superficie</strong>, 
                      servicios de <em>Well Testing </em>
                      y <em>medición multifásica.</em>
                  </p>
                  <p className="hidden xl:flex xl:flex-col xl:text-left xl:text-2xl">
                    Aplicamos altos <strong> estándares 
                    de calidad </strong> locales e internacionales.
                    Garantizamos un servicio
                    de Clase Mundial.
                  </p>
                </div>
                <div className=" w-screen my-2 flex flex-col sm:mx-40 sm:mb-10 xl:relative xl:-top-24 xl:-left-20">
                    <button className=" btn shadow-lg shadow-green-700/50  bg-green-700 sm: text-xl sm:w-72 sm:h-16">Contáctanos</button>
                    <button className=" btn shadow-lg shadow-neutral-900/50 bg-neutral-900 sm: text-xl sm:w-72 sm:h-16">Lee más</button> 
                </div>
                <div className=" w-4/5 mx-8 xl:relative xl:-top-2/4 xl:left-6">
                  <Image className="w-12 relative -bottom-14 sm:w-20 sm:-bottom-16 xl:-top-2/4 xl:left-1/3 xl:w-52 xl:h-52" src="/images/esfera verde.png" width={150} height={150}/>
                  <Image className="w-14 relative bottom-6 left-6 sm:w-32 sm:left-12 sm:bottom-20 xl:left-96" src="/images/esfera gris.png" width={150} height={150}/> 
                  <Image className=" hidden relative w-full z-10  foto xl:left-64 xl:flex xl:w-full" src="/images/part - hombre .png" width={300} height={300} alt="imagen personal Wellgix"/>
                </div> 
              </div>
              {/* HOME 2 */}
              <div className="phone_home2 sm:flex sm:width2 xl:hidden"> 
                <div className=" relative -bottom-3/4 w-2/4 pl-1 pr-48 sm:pr-60 sm:pl-40 text-left  sm:w-2/5">
                  <p className="sm:text-2xl ">
                    Aplicamos altos <strong>estándares 
                    de calidad</strong> locales e internacionales.
                    Garantizamos un servicio
                    de Clase Mundial.
                  </p>
                  <Image className="w-screen" src="/images/logo1.png" width={150} height={150} alt="logo Wellgix"/>
                </div>
                <Image className=" w-20 h-20 relative left-5 top-40 sm:left-60 sm:w-44 sm:h-44" src="/images/esfera verde.png" width={150} height={150}/>
                <Image className=" w-40 h-40 relative left-48 -top-40 sm:w-60 sm:h-60 sm:-top-96 sm:left-96" src="/images/esfera verde.png" width={150} height={150}/>
                <Image className="relative w-full z-10 -top-72 flex sm:-top-2/3 sm:w-3/4 sm:-right-60" src="/images/part - hombre .png" width={300} height={300} alt="imagen personal Wellgix"/>
              </div>
              <div className="flex flex-col w-screen h-screen ">
                <div className="w-full h-full bg-gray-700 flex flex-col z-10">
                    <div className="w-full p-2 my-8 flex sm:p-6"><span className="w-8  "> <Image className=" w-5 h-5 sm:w-8 sm:h-8" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-sm/7 text-white sm:text-3xl" href="">Respuesta Inmediata</a></div>
                    <div className="w-full p-2 my-8 flex sm:p-6"><span className="w-8  "> <Image className=" w-5 h-5 sm:w-8 sm:h-8" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-sm/7 text-white sm:text-3xl" href="">Reducción de Tiempos Perdidos</a></div>
                    <div className="w-full p-2 my-8 flex sm:p-6"><span className="w-8  "> <Image className=" w-5 h-5 sm:w-8 sm:h-8" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-sm/7 text-white sm:text-3xl" href="">Medición Certificada</a></div>
                    <div className="w-full p-2 my-8 flex sm:p-6"><span className="w-8  "> <Image className=" w-5 h-5 sm:w-8 sm:h-8" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-sm/7 text-white sm:text-3xl" href="">Sostenimiento, Optimización e Incremento de la Producción</a></div>
                    <div className="w-full p-2 my-8 flex sm:p-6"><span className="w-8  "> <Image className=" w-5 h-5 sm:w-8 sm:h-8" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-sm/7 text-white sm:text-3xl" href="">Extensión de la Vida útil de pozos y equipos</a></div>
                    <div className="w-full p-2 my-8 flex sm:p-6"><span className="w-8  "> <Image className=" w-5 h-5 sm:w-8 sm:h-8" src="/images/icons-vertical.png" width={5} height={5} /> </span><a className=" text-sm/7 text-white sm:text-3xl" href="">Reducción de producción Diferida</a></div>
                </div>
              </div>
              {/* HOME 3 */}
              <div className="width2 flex xl:flex-col xl:w-screen">
                <div className="flex flex-col w-screen h-screen text-left ">
                  <h2 className=" -ml-4 mt-36 mb-10 styleTitle w-60 h-10 text-white text-center pt-2 text-xl z-0 sm:w-72 sm:h-16 sm:text-3xl xl:mt-10 ">MISIÓN</h2>
                  <p className=" w-full mx-6 px-6 sm:text-2xl sm:pr-28 xl:pr-96">
                    Mantener en óptimo funcionamientos los <strong>campos de petróleo y gas </strong> 
                    así como sus facilidades de superficie, garantizando la continuidad 
                    operacional e incremento de la producción, al asegurar la máxima
                    disponibilidad y confiabilidad de los procesos productivos de toda 
                    la cadena de valor de nuestro cliente, generando el mayor <strong>rendimiento 
                    de los equipos, reducción de los costos operativos,</strong> los mejores
                    <strong>indicadores de seguridad </strong>y el menor <strong>impacto al ambiente.</strong>
                  </p>
                  <Image className="w-60 h-60 relative -bottom-20 left-60 sm:w-72 sm:h-72 sm:left-3/4" src="/images/esfera verde.png" width={150} height={150}/>
                </div>
                <div className="flex flex-col w-screen h-screen text-left xl:relative xl:-top-72">
                  <Image className="w-16 h-16 relative -bottom-32 -left-2 z-10 sm:w-28 sm:h-28 sm:-bottom-44 xl:left-96" src="/images/esfera gris.png" width={150} height={150}/>
                  <h2 className="relative -top-16 left-8 -ml-4 mt-36 mb-10 styleTitle w-60 h-10 text-white text-center pt-2 text-xl z-0 sm:w-72 sm:h-16 sm:text-3xl">VISIÓN</h2>
                  <p className=" w-full mr-10 px-6 sm:text-2xl sm:pr-28 xl:pr-96">
                    Ser los líderes en operaciones de superficie y mantenimiento
                    operacional en la industria de petróleo y gas.
                  </p>
                </div>
              </div>
              {/* HOME 4 */}
              <div className="flex width xl:w-screen">
                <Image className="w-60 h-60 relative -top-10 -left-32 z-10 " src="/images/esfera verde.png" width={150} height={150}/>
                <div className="flex flex-col w-screen h-screen text-left relative -left-52 mr-20 xl:w-4/5 xl:m-0">
                  <h2 className="-ml-4 mt-36 mb-10 styleTitle w-60 h-10 text-white text-center pt-2 text-xl z-0 relative -top-28 sm:w-72 sm:h-16 sm:text-3xl xl:w-3/4">SERVICIOS</h2>
                  <Gallery  
                    imagen="img-gallery1.jpg"
                    titulo="Alquiler de equipos"
                    servicios={["Llave de mano","Equipos de bombeo","Generador Eléctrico","Procesos en general"]}
                  />
                  <Gallery 
                    imagen="img-gallery2.jpg"
                    titulo="Well Testing"
                    servicios={["Llave de mano","Equipos de bombeo","Generador Eléctrico","Procesos en general","blablabla"]}
                  />   
                </div>
                <div className="flex flex-col w-screen h-screen text-left relative -left-52 mr-20 xl:w-4/5 ">
                  <h2 className=" -ml-4 mt-36 mb-10 styleTitle w-60 h-10 text-white text-center pt-2 text-xl z-0 relative -top-28 sm:w-72 sm:h-16 sm:text-3xl ">SERVICIOS</h2>
                  <Gallery 
                    imagen="img-gallery3.jpg"
                    titulo="Alquiler de equipos"
                    servicios={["Llave de mano","Equipos de bombeo","Generador Eléctrico","Procesos en general"]}
                  />
                  <Gallery 
                    imagen="img-gallery4.jpg"
                    titulo="Well Testing"
                    servicios={["Llave de mano","Equipos de bombeo","Generador Eléctrico","Procesos en general","blablabla"]}
                  />   
                </div>
              </div>
              {/* HOME 5 */}
              <div className="width flex xl:w-screen">
                <div className="flex flex-col w-2/5 h-screen text-justify pr-10 sm:pr-20">
                  <h2 className=" ml-10 mt-36 mb-10  text-black pt-2 text-3xl sm:mr-10">Equipo directivo de reconocida experiencia internacional liderando transformación</h2>
                  <p className="w-full ml-6 pr-6 sm:text-2xl sm:pr-28">
                    Mantener en óptimo funcionamientos los <strong>campos de petróleo y gas </strong> 
                    así como sus facilidades de superficie, garantizando la continuidad 
                    operacional e incremento de la producción, al asegurar la máxima
                    disponibilidad y confiabilidad de los procesos productivos de toda 
                    la cadena de valor de nuestro cliente, generando el mayor <strong>rendimiento 
                    de los equipos, reducción de los costos operativos,</strong> los mejores
                    <strong>indicadores de seguridad </strong>y el menor <strong>impacto al ambiente.</strong>
                  </p>
                </div>
                <div className="w-3/5 h-screen" >
                  <Image className="w-full h-full sm:w-3/5" src="/images/img-local.jpg" width={150} height={150}/>
                </div>
              </div>
              {/* FOOTER */}
              <div className=" w-screen h-screen flex">
                <div className="w-screen h-screen ml-10 bg-neutral-200 flex flex-col xl:w-1/2">
                  <div className=" w-full h-1/4 mt-20">
                    <Image className="w-screen" src="/images/logo1.png" width={150} height={150} alt="logo Wellgix"/>
                  </div>
                  <div className=" w-full h-1/4 flex p-10">
                    <a href=""><Image className=" mx-5 w-16 h-16  sm:w-36 sm:h-36 sm:mx-10" src="/images/part - ig.png" width={100} height={100} alt="ig" /></a>
                    <a href=""><Image className=" mx-5 w-14 h-14  sm:w-32 sm:h-32 sm:mx-10" src="/images/part - face.png" width={100} height={100} alt="face" /></a>
                    <a href=""><Image className=" mx-5 w-16 h-16  sm:w-36 sm:h-36 sm:mx-10" src="/images/part - whatsapp.png" width={100} height={100} alt="whatsapp" /></a>
                  </div>
                  <div className=" w-full h-1/4 flex flex-col">
                    <h1 className="w-72 h-10 text-black text-center pt-2 text-4xl font-bold mb-10 mx-12 sm:text-4xl sm:mx-60 sm:mt-5">Comunícate con nosotros</h1>
                    <p className="w-72 h-10 text-black text-center pt-2 text-xl mx-12 sm:text-2xl sm:mx-60 sm:mt-5">¿A cuál de nuestras áreas quieres pertenecer?</p>
                  </div>
                  <div className="w-full h-1/4">
                    <h1 className="w-72 h-10 text-black text-center pt-2 text-2xl">INVERSOR</h1>
                    <div className="flex p-5">
                      <a href=""><Image className="mx-5 sm:w-40 sm:h-50" src="/images/part - boton inversor.png" width={100} height={100} alt="ig" /></a>
                      <a href=""><Image className="mx-5 sm:w-40 sm:h-50" src="/images/part - boton trabajador.png" width={100} height={100} alt="face" /></a>
                      <a href=""><Image className="mx-5 sm:w-40 sm:h-50" src="/images/part - boton aliado socio.png" width={100} height={100} alt="whatsapp" /></a>
                    </div>
                  </div>                 
                </div>
                <div className="hedden xl:flex xl:w-1/2 xl:h-screen">

                </div>
              </div>
              
          </div>
        </div>
      </section>
    );
}