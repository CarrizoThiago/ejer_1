import Header from "./Components/header";
import Section1 from "./Components/Section1";
import Section3 from "./Components/Section3";
import Footer from "./Components/footer";
import Slide from "./Components/slide";
import Formulario from "./Components/Formulario";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0e1a] text-[#e2e8f0] font-['Inter']">
      {/* Global background orbs */}
      <div className="bg-orb w-[600px] h-[600px] bg-[#4361ee] top-[10%] right-[-200px] fixed"></div>
      <div className="bg-orb w-[500px] h-[500px] bg-[#06d6a0] bottom-[20%] left-[-200px] fixed"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Section1 />
        <Slide />
        <Section3 />
        <Formulario />
        <Footer />
      </div>
    </div>
  );
}

export default App;
