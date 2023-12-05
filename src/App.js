import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import OurWork from "./components/OurWork";
import Fields from "./components/Fields";
import Introduce from "./components/Introduce";
import { Route, Routes } from 'react-router-dom';
import Main from "./pages/Main";
import Services from "./components/services";
import Expertise from "./pages/Expertise";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route exact path="/ourexpertise" element={<Expertise />}/>
        <Route exact path="/ourteam" element={<Introduce />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
