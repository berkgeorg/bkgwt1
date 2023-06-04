import React from "react";
import Image from "next/image";

export default function Gallery({
  imagen,
  titulo,
  servicios
}) {
  return(
    <div className=" w-screen h-4/5 overflow-hidden my-10 sm:my-5 sm:pl-10 xl:w-full">
      <Image className="w-full h-full rounded-lg sm:w-4/5 sm:h-full"
            src={`/images/${imagen}`}
            width={150}
            height={150}
            alt="Foto "/>

         <div className="relative left-6 -top-6 w-3/4 h-auto backdrop-contrast-50 bg-black/70 text-center flex flex-col rounded-t-lg hover:-translate-y-full transition ease-in-out duration-300 sm:-top-8">
            <h2 className=" text-lg text-white">{titulo}</h2>
            {servicios.map((item, index) =>(
              <a className="text-lg text-white" href="#" key={index}>{item}</a>
            ))}
         </div>
    </div>  
  );
}