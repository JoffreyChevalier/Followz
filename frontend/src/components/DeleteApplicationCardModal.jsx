import { useNavigate } from "react-router-dom";

import { logout } from "@services/api";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

// eslint-disable-next-line
function DeleteApplicationCardModal({ open, handler, onClick, handleOpen }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="absolute -top-2 -right-2 text-white p-[.1rem] hover:scale-110 bg-red-500 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 48 48"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="6"
        >
          <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
        </svg>
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
              Voulez-vous vraiment supprimer cette candidature ?
            </p>
          </DialogBody>
          <DialogFooter className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Button
              size="md"
              className="bg-primary w-20"
              onClick={() => handleDelete()}
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

export default DeleteApplicationCardModal;
