// src/components/BotCollection.jsx
function BotCollection({ bots, enlistBot }) {
    return (
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bots.map((bot) => (
          <div
            key={bot.id}
            onClick={() => enlistBot(bot)}
            className="cursor-pointer border rounded p-4 hover:shadow-lg transition"
          >
            <img
              src={bot.avatar_url}
              alt={bot.name}
              className="w-32 h-32 mx-auto"
            />
            <h2 className="text-xl text-center font-bold mt-2">{bot.name}</h2>
            <p className="text-center text-sm italic">{bot.catchphrase}</p>
            <div className="text-center mt-2 text-sm">
              <p>Class: {bot.bot_class}</p>
              <p>Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default BotCollection;
  