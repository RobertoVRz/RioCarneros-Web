import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 px-2 mx-2">
        La nanocuenta del <span className="text-2xl ml-1"> RIO CARNEROS</span>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          <li>
            {" "}
            <Link className="font-light" href="/conoceme">
              {"Conóceme"}
            </Link>
          </li>
          <li>
            {" "}
            <Link className="font-light" href="/conoceme">
              {"Guardianes de río"}
            </Link>
          </li>
          <li>
            {" "}
            <Link className="font-light" href="/conoceme">
              {"Plan Maestro"}
            </Link>
          </li>
          <li>
            {" "}
            <Link className="font-light" href="/conoceme">
              {"Eventos"}
            </Link>
          </li>
          <li>
            {" "}
            <Link className="font-light" href="/conoceme">
              {"Participa"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
