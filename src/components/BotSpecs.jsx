import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function BotSpecs() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bot, setBot] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/bots/${id}`)
      .then((res) => res.json())
      .then(setBot);
  }, [id]);

  if (!bot) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Back
      </button>
      <div className="bg-blue p-6 rounded shadow">
        <img src={bot.avatar_url} alt={bot.name} className="w-60 rounded" />
        <h2 className="text-2xl font-bold">{bot.name}</h2>
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p className="italic">{bot.catchphrase}</p>
      </div>
    </div>
  );
}

export default BotSpecs;
