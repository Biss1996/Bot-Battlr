import BotCard from "./BotCard";

function BotCollection({ bots, onEnlist }) {
  return (
    <div>
      <h2>All Bots</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={() => onEnlist(bot)} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
