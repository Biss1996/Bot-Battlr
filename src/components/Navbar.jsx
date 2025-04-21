import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-wide">Bot Battlr</h1>
      <div className="flex gap-8">
        <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        <Link to="/bots" className="hover:text-yellow-300 transition">All Bots</Link>
        <Link to="/army" className="hover:text-yellow-300 transition">My Army</Link>
      </div>
    </div>
  </nav>
  
  );
}

export default Navbar;
