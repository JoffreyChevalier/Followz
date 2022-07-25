import { useNavigate } from "react-router-dom";

import { logout } from "@services/api";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

// eslint-disable-next-line
function LogoutModal({ open, handler, onClick, handleOpen }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="flex justify-center w-full px-2 py-1.5 text-sm text-grey-500 rounded-lg hover:bg-grey-50 hover:text-error group relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 0 24 24"
          width="20px"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
        </svg>

        <span className="absolute text-xs font-medium text-white bg-grey-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
          Déconnexion
        </span>
      </button>
      <Dialog
        dismissType={{ enabled: false }}
        open={open}
        handler={handler}
        className=" max-w-screen-lg px-4 mx-auto sm:px-8 lg:px-10"
      >
        <div className="flex flex-col items-center">
          <DialogBody>
            <p className=" text-center text-sm xs:text-md sm:text-lg">
              Voulez-vous vraiment vous déconnecter ?
            </p>
          </DialogBody>
          <DialogFooter className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Button
              size="md"
              className="bg-primary w-20"
              onClick={() => handleLogout()}
            >
              <span>oui</span>
            </Button>{" "}
            <Button size="md" className="bg-error w-20" onClick={handleOpen}>
              <span>non</span>
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </>
  );
}

export default LogoutModal;
