// src/components/YourBotArmy.jsx
function YourBotArmy({ army, releaseBot, dischargeBot }) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Your Bot Army</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {army.map((bot) => (
            <div
              key={bot.id}
              onClick={() => releaseBot(bot)}
              className="cursor-pointer border rounded p-4 hover:shadow-lg transition relative"
            >
              <img src={bot.avatar_url} alt={bot.name} className="w-32 h-32 mx-auto" />
              <h2 className="text-xl text-center font-bold mt-2">{bot.name}</h2>
              <button
                className="absolute top-2 right-2 bg-red-500 text-red rounded-full px-2"
                onClick={(e) => {
                  e.stopPropagation(); // prevent triggering releaseBot
                  dischargeBot(bot);
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default YourBotArmy;
  