import { asset, navLinks } from "../constants";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={asset("/logo.svg")} alt="Apple Logo" />
        <ul>
          {navLinks.map(({ label }) => {
            return (
              <li key={label}>
                <a href={label}>{label}</a>
              </li>
            );
          })}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src={asset("/search.svg")} alt="Search" />
          </button>
          <button>
            <img src={asset("/cart.svg")} alt="Search" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
