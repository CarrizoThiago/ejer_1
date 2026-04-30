import Header from "./Components/Header";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Footer from "./Components/Footer";
import Slide from "./Components/Slide";
import Section4 from "./Components/Section4";

function App() {
  
  return (
    //<div className="flex items-center justify-center h-screen bg-blue-100">
    //contenedor
  <div className="w-[100%] min-h-screen pb-[10px] bg-[#0f172a] text-[#06B6D4] font-['Inter']">
    {/*titulo */}
    <Header />
    {/*seccion1 */}
    <Section1 />
    {/*seccion2----> reemplazada por slide */}
    <Slide />
    {/*seccion3 */}
    <Section3 />
    {/*seccion4 */}
    <Section4 />
    <Footer />
  </div>
  )
}

export default App
