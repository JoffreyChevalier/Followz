import { Input, Alert } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { createUser } from "@services/api";

import logo from "@assets/logo.png";
import SubscriptionForm from "@components/SubscriptionForm";

function SubscriptionPage() {
  const [open, setOpen] = useState(false);

  const [error, setError] = useState();
  const [show, setShow] = useState(true);

  const { register, handleSubmit, reset } = useForm();

  const handleOpen = () => setOpen(!open);

  const onSubmit = async (formData) => {
    const { passwordCheck, ...keepedData } = formData;

    try {
      if (formData.password === formData.passwordCheck) {
        await createUser(keepedData);
        handleOpen();
      } else {
        setError("Mot de passe different");
        setShow(true);
        reset();
      }
    } catch {
      setError("Pseudonyme deja existant");
      setShow(true);
      reset();
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-[39rem] mx-auto">
          <div className="flex flex-col sm:flex-row m-8 rounded-lg shadow-lg  bg-white">
            <div className="flex flex-col items-center p-4 bg-primary rounded-t-lg sm:rounded-l-lg sm:rounded-r-none">
              <img src={logo} alt="Followz logo" />
              <article className="p-4 text-white text-sm sm:text-md lg:text-base">
                <p>
                  En vous inscrivant sur Followz, vous pourrez ajouter et
                  retrouver toutes les candidatures que vous avez faite. Faites
                  les évoluer au fur et à mesure des réponses et gardez à jour
                  votre avancement dans la recherche d'un job.
                </p>
                <p className="mt-4">
                  N'attendez plus et enregistrez-vous pour avoir accès à toutes
                  nos fonctionnalités.
                </p>
              </article>
            </div>
            <div className="flex flex-col items-center justify-center">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center w-30 p-6"
              >
                <div className="space-y-6">
                  {error && (
                    <Alert
                      show={show}
                      dismissible={{
                        onClose: () => setShow(false),
                      }}
                      color="red"
                    >
                      {error}
                    </Alert>
                  )}
                  <Input
                    type="text"
                    required
                    pattern="[A-z0-9]+"
                    title="Ponctuations et caractères spéciaux interdits"
                    label="Votre pseudonyme"
                    // eslint-disable-next-line
                    {...register("nickname")}
                  />
                  <Input
                    type="password"
                    required
                    label="Votre mot de passe"
                    // eslint-disable-next-line
                    {...register("password")}
                  />
                  <Input
                    type="password"
                    required
                    label="Confirmez le mot de passe"
                    // eslint-disable-next-line
                    {...register("passwordCheck")}
                  />
                </div>
                <SubscriptionForm buttonType="submit" open={open} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPage;
