import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

function Layout({ children }) {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className="drawer" data-theme={theme}>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar handleTheme={handleTheme} />
        <main data-theme={theme}>{children}</main>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
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

export default Layout;
