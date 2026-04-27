function App() {
  return (
    //<div className="flex items-center justify-center h-screen bg-blue-100">
    //contenedor
  <div className="w-[100%] min-h-screen pb-[10px] bg-[#0f172a] text-[#06B6D4] font-['Inter']">
    {/*titulo */}
    <div className="w-[100%] text-[#06B6D4] flex items-center justify-center">
      <h1 className="text-5xl underline-offset-10 underline decoration-[#06B6D4]">Carrizo Ham Thiago</h1>
    </div>
    {/*seccion1 */}
    <div className="w-[90%] ml-[5%] mr-[5%] mt-[20px] mb-[20px] flex flex-col md:flex-row ">
      {/*seccion1 izquierda */}
      <div className="w-[100%] md:w-[80%]">
        <h1 className="text-4xl">Estudios</h1>
          <p className="text-3xl">Soy estudiante de último año en E.E.S.T N°7 "Jose Hernandez"
            , dentro de la modalidad de programación.<br />
            <br /><br />A la vez me encuentro cursando 7mo año de inglés en lenguas vivas.</p>
      </div>
      {/*seccion1 derecha */}
      <div className="w-[100%] md:w-[20%] flex items-center justify-center">
        {/*en la foto salgo matado por que en ese 15 estaba re engripado */}
       <a href="https://www.instagram.com/thiago_carri_/"><img className="w-[300px] h-[300px] md:w-[150px] md:h-[150px] lg:w-[250px] lg:h-[250px] rounded-full" src="/fotondacv.jpg" />    </a>
      </div>
    </div>
    {/*seccion2 */}
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
    {/*seccion3 */}
    <div className="w-[90%] ml-[5%] mr-[5%] mt-[20px] mb-[20px]">
      <h1 className="text-4xl">Experiencia</h1> <br />
      <p className="text-2xl">De mis varios proyectos realizados en el marco de las exposiciones de la escuela no e conservado ninguno, pero entre ellos se encontro un juego de elige tu propia aventura en c++, una replica del PVZ1 en java y un juego dungeon en java (para tener referencias consultarle a Yessica Martinez).</p>
    </div>
    <footer>
      <p className="text-1xl text-center"><br />
      <h1 className="text-4xl">Contacto</h1>Correo personal: Hamthiago08@gmail.com || Correo institucional: Carrizo.Ham@tecnica7.edu.ar 
      <br /><br />© 2025 Carrizo Ham Thiago. Todos los derechos reservados.</p>
    </footer>
  </div>
  )
}

export default App
