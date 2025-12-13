import "./App.css";
import { Contador } from "./components/Contador";
import { ToggleText } from "./components/ToggleText";
import { InputControl } from "./components/InputControl";
import { Timer } from "./components/Timer";
import { ScrollPosition } from "./components/ScrollDetector";
import { Users } from "./components/Users";
import { AutoContador } from "./components/AutoContador";
import { CountrySearch } from "./components/CountrySearch";

function App() {
  return (
    <>
      <Contador />

      <ToggleText />

      <InputControl />

      <Timer />

      <ScrollPosition />

      <Users />

      <AutoContador />

      <CountrySearch />
    </>
  );
}

export default App;
