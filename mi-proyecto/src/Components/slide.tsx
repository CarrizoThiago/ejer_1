import { useState, useEffect } from "react";


function Slide(){
     const ima=[
            "/csslogo.jpg",
            "/htmlogo.jpg",
            "/logojava.jpg",
            "/taillogo.png",
            "/logogit.jpg",
            "/jslogo.png",
            "/reactlogo.jpg",
            "clogo.png"
     ]
    const [indice, setIndice] = useState<number>(0)
    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndice((prev) => (prev + 1) % ima.length)
        }, 1000)
        return () => clearInterval(intervalo)
    }, [])

    return(
        <div className="flex justify-center items-center flex-col bg-emerald-900 pb-[5%] pt-[2%] w-[90%] ml-[5%] border-2 border-[#10B981]">
            <h1 className="text-5xl pb-[2%] text-white">Conocimientos</h1>
            <div className="md:w-[70%] w-[100%] flex flex-col md:flex-row items-center justify-center gap-[5%] md:gap-[7%] pt-[2%] pb-[2%] border-2 border-[#0f172a] bg-[#10B981]">
                <img className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] ld:w-[130px] ld:h-[130px] flex-col md:flex-row rounded-full md:mb-0 mb-[2%]" src={ima[indice]} alt="slide" />
                <img className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] ld:w-[130px] ld:h-[130px] flex-col md:flex-row rounded-full md:mb-0 mb-[2%]" src={ima[(indice + 1) % ima.length]} alt="slide" />
                <img className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] ld:w-[130px] ld:h-[130px] flex-col md:flex-row rounded-full md:mb-0 mb-[2%]" src={ima[(indice + 2) % ima.length]} alt="slide" />
                <img className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] ld:w-[130px] ld:h-[130px] flex-col md:flex-row rounded-full md:mb-0 mb-[2%]" src={ima[(indice + 3) % ima.length]} alt="slide" />
                <img className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] ld:w-[130px] ld:h-[130px] flex-col md:flex-row rounded-full md:mb-0 mb-[2%]" src={ima[(indice + 4) % ima.length]} alt="slide" />
            </div>
        </div>
    )
}
export default Slide;