import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img
            alt="SEES-Logo"
            className="h-14 inline"
            src="SEES.jpg"
          ></img>
        </NavLink>
        <div className="flex flex-col text-left lg:w-100 md:w-11/12 w-[80%]">
          <h1 className="text-[18px] font-semibold">Tournament updates</h1>
          <p className="text-[12px] text-gray-500">
            Get real-time updates on the scores
          </p>
        </div>
      </nav>
    </div>
  );
}
