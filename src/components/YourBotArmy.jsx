import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onRelease(bot.id)}
            showRemove={false}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
