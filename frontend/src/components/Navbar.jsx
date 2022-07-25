import { useState } from "react";
import { Link } from "react-router-dom";

import avatar from "@assets/avatar.png";
import LogoutModal from "./LogoutModal";

// eslint-disable-next-line
function Navbar({ path }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex flex-col justify-between w-16 h-screen bg-white border-r border-grey-300">
      <div>
        <div className="inline-flex items-center justify-center w-16 h-16">
          <img src={avatar} alt="Avatar" className="w-12 h-12" />
        </div>

        <div>
          <nav className="flex flex-col p-2">
            <ul className="pt-4 space-y-1 border-t border-grey-300">
              <li>
                <Link
                  to="/candidatures"
                  className={
                    path === "/candidatures"
                      ? "relative group flex justify-center px-1.5 py-1.5 text-secondary rounded bg-grey-100"
                      : "relative group flex justify-center px-1.5 py-1.5 text-grey-500 rounded hover:bg-grey-100 hover:text-secondary"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 opacity-75"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <path d="M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z" />
                  </svg>

                  <span className="absolute text-xs font-medium text-white bg-grey-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
                    Candidatures
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/archives"
                  className={
                    path === "/archives"
                      ? "relative group flex justify-center px-1.5 py-1.5 text-secondary rounded bg-grey-100"
                      : "relative group flex justify-center px-1.5 py-1.5 text-grey-500 rounded hover:bg-grey-100 hover:text-secondary"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 opacity-75"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <g>
                      <g>
                        <path d="M16.5,2h-13C2.67,2,2,2.67,2,3.5v3c0,0.65,0.42,1.2,1,1.41v8.59C3,17.33,3.67,18,4.5,18h11c0.83,0,1.5-0.67,1.5-1.5V7.91 c0.58-0.21,1-0.76,1-1.41v-3C18,2.67,17.33,2,16.5,2z M16.5,6.5h-13v-3h13V6.5z M12,11.5H8V10h4V11.5z" />
                      </g>
                    </g>
                  </svg>

                  <span className="absolute text-xs font-medium text-white bg-grey-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
                    Archives
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/profil"
                  className={
                    path === "/profil"
                      ? "relative group flex justify-center px-1.5 py-1.5 text-secondary rounded bg-grey-100"
                      : "relative group flex justify-center px-1.5 py-1.5 text-grey-500 rounded hover:bg-grey-100 hover:text-secondary"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 opacity-75"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <g>
                      <g>
                        <circle cx="10" cy="8" r="4" />
                        <path d="M10.67,13.02C10.45,13.01,10.23,13,10,13c-2.42,0-4.68,0.67-6.61,1.82C2.51,15.34,2,16.32,2,17.35V20h9.26 C10.47,18.87,10,17.49,10,16C10,14.93,10.25,13.93,10.67,13.02z" />
                        <path d="M20.75,16c0-0.22-0.03-0.42-0.06-0.63l1.14-1.01l-1-1.73l-1.45,0.49c-0.32-0.27-0.68-0.48-1.08-0.63L18,11h-2l-0.3,1.49 c-0.4,0.15-0.76,0.36-1.08,0.63l-1.45-0.49l-1,1.73l1.14,1.01c-0.03,0.21-0.06,0.41-0.06,0.63s0.03,0.42,0.06,0.63l-1.14,1.01 l1,1.73l1.45-0.49c0.32,0.27,0.68,0.48,1.08,0.63L16,21h2l0.3-1.49c0.4-0.15,0.76-0.36,1.08-0.63l1.45,0.49l1-1.73l-1.14-1.01 C20.72,16.42,20.75,16.22,20.75,16z M17,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S18.1,18,17,18z" />
                      </g>
                    </g>
                  </svg>

                  <span className="absolute text-xs font-medium text-white bg-grey-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
                    Paramètres
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 p-2 bg-white border-t border-grey-300">
        <LogoutModal onClick={handleOpen} open={open} handleOpen={handleOpen} />
      </div>
    </div>
  );
}

export default Navbar;
