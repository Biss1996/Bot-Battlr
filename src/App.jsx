import { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (id) => {
    setArmy(army.filter((bot) => bot.id !== id));
  };

  return (
    <div className="p-4">
      <YourBotArmy army={army} onRelease={releaseBot} />
      <BotCollection bots={bots} onEnlist={enlistBot} />
    </div>
  );
}

export default App;
