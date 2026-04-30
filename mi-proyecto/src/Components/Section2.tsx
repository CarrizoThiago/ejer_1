function Section2 (){


 return (
    <div>
            <div className="w-[90%] ml-[5%] mr-[5%] mt-[20px] mb-[20px] flex flex-col md:flex-row justify-center items-center ">
       <div className="w-[100%] md:w-[25%] flex justify-center">
        <img className="w-[150px] h-[150px] rounded-full" src="/logojava.jpg" />
      </div>
      <div className="w-[100%]">
        <h1 className="text-4xl">Conocimientos</h1><br />
        <div className="flex flex-col w-full md:w-[100%]">
          <p className="text-2xl bg-emerald-800 text-black border-4 border-white w-full text-center items-center justify-center">Altos: Ingles, Java, html, css y javascript.</p><br />
          <p className="text-2xl bg-emerald-400 text-black border-4 border-white w-full text-center items-center justify-center">Medios: c++, sql y redes.</p><br />
          <p className="text-2xl bg-amber-300 text-black border-4 border-white w-full text-center items-center justify-center">Basicos: git, github, react, node.js, tailwind y nociones de ciberseguridad.</p>
        </div>
      </div>
      <div className="w-[100%] md:w-[25%] flex justify-center">
        <img className="w-[150px] h-[150px] rounded-full" src="/htmlogo.jpg" />
      </div>
    </div>
    </div>
 )
}

export default Section2