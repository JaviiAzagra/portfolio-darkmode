import { LayoutCards } from "./components/Card";
import Navbar from "./components/Navbar";
import { MyProfile } from "./components/Perfil";
import { Switch } from "./components/Switch";
import { Title } from "./components/Title";
import Hero from "./components/Hero";


const App = () => {
  return (
    <div className="container-main">
      <Navbar/>
      <Title />
      <Hero/>
      <LayoutCards />
    </div>
  )
}
export default App
