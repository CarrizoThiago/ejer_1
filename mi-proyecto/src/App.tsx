import Header from "./Components/header";
import Seccion1 from "./Components/secccion1";
import Seccion2 from "./Components/seccion2";
import Seccion3 from "./Components/seccion3";
import Footer from "./Components/footer";

function App() {
  
  return (
    //<div className="flex items-center justify-center h-screen bg-blue-100">
    //contenedor
  <div className="w-[100%] min-h-screen pb-[10px] bg-[#0f172a] text-[#06B6D4] font-['Inter']">
    {/*titulo */}
    <Header />
    {/*seccion1 */}
    <Seccion1 />
    {/*seccion2 */}
    <Seccion2 />
    {/*seccion3 */}
    <Seccion3 />
    <Footer />
  </div>
  )
}

export default App
