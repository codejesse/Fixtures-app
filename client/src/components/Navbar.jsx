import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img
            alt="SEES-Logo"
            className="h-14 inline"
            src="https://scontent.fphc2-2.fna.fbcdn.net/v/t39.30808-6/449074990_1406447256709374_7250867874701459372_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFaZUOb0B_PrEI5QUCQ3CGIN-lZr-0lAaE36Vmv7SUBoVo0PagBnqra8LMQOnSrz-V-MyT6wYH54vV0bglerTUd&_nc_ohc=MyHUrhWj2R4Q7kNvgHciSpI&_nc_zt=23&_nc_ht=scontent.fphc2-2.fna&oh=00_AYAmTz5Hux5TxU4rGC-K-zAZGoIACbPBJuc6dPanWDnvng&oe=6683C722"
          ></img>
        </NavLink>
        <div className="flex flex-col text-left lg:w-11/12 md:w-11/12 w-[80%]">
          <h1 className="text-[18px] font-semibold">Tournament updates</h1>
          <p className="text-[12px] text-gray-500">
            Get real-time updates on the scores
          </p>
        </div>
      </nav>
    </div>
  );
}
