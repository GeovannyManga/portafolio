import NavBar from "./components/Nav";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Servicios from "./components/Servicios";
import Trabajos from "./components/Trabajos";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Welcome></Welcome>
      <About></About>
      <Servicios></Servicios>
      <Trabajos></Trabajos>
      <Footer></Footer>
    </div>
  );
}
