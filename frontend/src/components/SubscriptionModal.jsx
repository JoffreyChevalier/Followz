import { useNavigate } from "react-router-dom";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

// eslint-disable-next-line
function SubscriptionModal({ open, handler, buttonType }) {
  const navigate = useNavigate();

  return (
    <>
      <Button type={buttonType} size="md" className="bg-primary mt-6">
        M'inscrire
      </Button>
      <Dialog
        dismissType={{ enabled: false }}
        open={open}
        handler={handler}
        className=" max-w-screen-xl px-4 mx-auto w-3/4 sm:px-8 lg:px-10"
      >
        <div className="flex flex-col items-center max-w-fit mx-auto">
          <DialogHeader className="text-center">
            <p className="text-md sm:text-2xl lg:text-4xl">
              {" "}
              Vos identifants ont été créé avec succès 🎉
            </p>
          </DialogHeader>
          <DialogBody>
            <p className="text-sm sm:text-base lg:text-xl">
              Bienvenue parmis nous. Nous esperons que notre apllications vous
              sera utile dans votre recherche de job et qu'elle vous amenera
              vers le graal : le super job de vos reves !
            </p>
          </DialogBody>
          <DialogFooter>
            <Button
              size="md"
              className="bg-primary"
              onClick={() => navigate("/")}
            >
              <span>Retour</span>
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </>
  );
}

export default SubscriptionModal;
