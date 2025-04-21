function BotCard({ bot, onClick, showRemove, onRemove }) {
    return (
      <div onClick={onClick} className="cursor-pointer bg-gray-100 p-2 rounded shadow">
        <img src={bot.avatar_url} alt={bot.name} className="w-full" />
        <h3>{bot.name}</h3>
        <p>{bot.bot_class}</p>
        <p>{bot.catchphrase}</p>
        {showRemove && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove(bot.id);
            }}
            className="text-red-500"
          >
            x
          </button>
        )}
      </div>
    );
  }
  
  export default BotCard;
  