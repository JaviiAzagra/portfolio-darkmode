import About from "./components/About";
import { LayoutCards } from "./components/Card";
import Navbar from "./components/Navbar";
import { MyProfile } from "./components/Perfil";
import { Switch } from "./components/Switch";
import { Title } from "./components/Title";


const App = () => {
  return (
    <div className="container-main">
      <Navbar/>
      <Title />
      <About/>
      <LayoutCards />
    </div>
  )
}
export default App
