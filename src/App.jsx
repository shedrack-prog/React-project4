import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImgGallery from "./components/ImgGallery";
import TF from "./components/TF";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Welcome />
      <ImgGallery />
      <TF />
    </div>
  );
}

export default App;
