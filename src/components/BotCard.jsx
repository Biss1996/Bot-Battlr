import { Link } from "react-router-dom";

function BotCard({ bot, onClick, showRemove = false, onRemove }) {
  return (
    <div className="relative bg-white p-4 rounded shadow">
      <Link to={`/bots/${bot.id}`}>
        <img
          src={bot.avatar_url}
          alt={bot.name}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="font-bold mt-2">{bot.name}</h3>
        <p>{bot.bot_class}</p>
        <p className="text-xs italic">{bot.catchphrase}</p>
      </Link>
      {onClick && (
        <button
          onClick={onClick}
          className="mt-2 bg-green-500 text-white px-2 py-1 rounded"
        >
          Enlist
        </button>
      )}
      {showRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(bot.id);
          }}
          className="absolute top-2 right-2 bg-red-500 text-white px-2 rounded"
        >
          x
        </button>
      )}
    </div>
  );
}

export default BotCard;
