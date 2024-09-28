import "./App.css";
import About from "./component/About/About";
import Comments from "./component/Comments/Comments";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Services from "./component/Services/Services";
import Works from "./component/Works/Works";

const App = () => {
  return (
    <>
    <Navbar />
    <br/> <br />
    <br /> <br />
    <Hero />
    <Services />
    <Works/>
    <About/>
    <Comments />
    <Footer />
    </>
  
  )
}

export default App