import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img alt="SEES-Logo" className="h-14 inline" src="SEES.jpg"></img>
        </NavLink>
        <div className="flex flex-col text-left lg:w-100 md:w-11/12 w-[80%]">
          <h1 className="text-[18px] font-semibold">Tournament updates</h1>
          <p className="text-[12px] text-gray-500">
            Get real-time updates on the scores
          </p>
        </div>
        <NavLink
          className="hidden bg-white text-white items-center mb-4 justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-background hover:bg-slate-100 h-9 rounded-md px-3"
          to="/create"
        >
          Create Match
        </NavLink>
      </nav>
    </div>
  );
}
