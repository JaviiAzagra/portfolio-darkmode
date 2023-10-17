import { AllProjects } from "./components/Projects";
import Navbar from "./components/Navbar";
import { MyProfile } from "./components/Perfil";
import { Switch } from "./components/Switch";
import { Title } from "./components/Title";
import Hero from "./components/Hero";
import About from "./components/About";
import More from "./components/More";
import { Analytics } from '@vercel/analytics/react';
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="container-main">
      <Navbar/>
      <Switch/>
      <Title />
      <Hero/>
      <About/>
      <AllProjects />
      <More/>
      <Contact/>
      <Footer/>
      <Analytics/>
    </div>
  )
}
export default App
