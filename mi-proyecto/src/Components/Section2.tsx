function Section2 (){


 return (
    <section className="relative w-full py-16 md:py-20 flex justify-center">
      <div className="w-full max-w-6xl px-4 flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="w-full md:w-[20%] flex justify-center">
          <img className="w-[150px] h-[150px] rounded-full" src="/logojava.jpg" alt="Java" />
        </div>
        <div className="w-full md:flex-1 text-center">
          <h1 className="text-4xl text-[#f8fafc] font-bold mb-4">Conocimientos</h1>
          <div className="flex flex-col gap-3">
            <p className="text-lg md:text-xl bg-emerald-800 text-black border-4 border-white w-full py-2 text-center rounded-lg">Altos: Inglés, Java, HTML, CSS y JavaScript.</p>
            <p className="text-lg md:text-xl bg-emerald-400 text-black border-4 border-white w-full py-2 text-center rounded-lg">Medios: C++, SQL y Redes.</p>
            <p className="text-lg md:text-xl bg-amber-300 text-black border-4 border-white w-full py-2 text-center rounded-lg">Básicos: Git, GitHub, React, Node.js, Tailwind y nociones de Ciberseguridad.</p>
          </div>
        </div>
        <div className="w-full md:w-[20%] flex justify-center">
          <img className="w-[150px] h-[150px] rounded-full" src="/htmlogo.jpg" alt="HTML" />
        </div>
      </div>
    </section>
 )
}

export default Section2