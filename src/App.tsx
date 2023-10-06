import About from "./components/About";
import { LayoutCards } from "./components/Card";
import { MyProfile } from "./components/Perfil";
import { Switch } from "./components/Switch";
import { Title } from "./components/Title";


const App = () => {
  return (
    <div className="container-main">
      <Title />
      <Switch/>
      <About/>
      <LayoutCards />
    </div>
  )
}
export default App
