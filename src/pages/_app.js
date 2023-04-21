import Navbar from "@/components/home/Navbar";
import { Barlow } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";

const barlow = Barlow({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={barlow.className}>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Navbar />
          <Component {...pageProps} />
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
    </main>
  );
}
