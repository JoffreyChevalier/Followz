import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function SubscriptionForm() {
  const navigate = useNavigate();
  const [subscriptionIsValid, setSubscriptionIsValid] = useState(false);
  const [open, setOpen] = useState(false);

  const { register, handleSubmit } = useForm();

  const handleOpen = () => setOpen(!open);

  const onSubmit = () => {
    setSubscriptionIsValid(true);
  };

  return (
    <>
      <Button onClick={handleOpen} size="md" className="bg-primary">
        M'inscrire
      </Button>
      <Dialog
        dismissType={{ enabled: false }}
        open={open}
        handler={handleOpen}
        className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8"
      >
        <div className="">
          <div className="max-w-md mx-auto">
            {!subscriptionIsValid ? (
              <>
                <DialogHeader>
                  Veuillez rentrer un pseudo et un mot de passe.
                </DialogHeader>
                <DialogBody>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" p-4 mt-0 mb-0 space-y-10"
                  >
                    <div className="space-y-6">
                      <Input
                        type="text"
                        label="Pseudonyme"
                        // eslint-disable-next-line
                        {...register("nickname")}
                      />
                      <Input
                        type="password"
                        label="Mot de Passe"
                        // eslint-disable-next-line
                        {...register("password")}
                      />
                    </div>
                    <Button type="submit" size="md" className="bg-primary">
                      Envoyer
                    </Button>
                  </form>
                </DialogBody>
              </>
            ) : (
              <>
                <DialogBody>
                  <h1>Bienvenue parmis nous 👏.</h1>
                  <h2>
                    Vous pouvez cliquer sur le bouton pour retourner à la page
                    de connexion.
                  </h2>
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
              </>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default SubscriptionForm;
