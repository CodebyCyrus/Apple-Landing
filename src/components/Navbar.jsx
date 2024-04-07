import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="Apple Img" width={14} height={18} />

        <div>
          {["iPhone", "Macbook", "iPad"].map((nav) => (
            <div key={nav}>{nav}</div>
          ))}
        </div>
        <div>
          <img src={searchImg} alt="Search icon" width={18} height={18} />
          <img src={bagImg} alt="Buy icon" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
