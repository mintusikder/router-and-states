import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./assets/components/NavBar/NavBar";
import PriceList from "./assets/components/PriceList/PriceList";
import Dasbord from "./assets/components/Dasbord/Dasbord";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <h1 className="text-xl font-bold underline bg-red-500">Hello world!</h1>
      <PriceList></PriceList>
      <Dasbord></Dasbord>
    </>
  );
}

export default App;
