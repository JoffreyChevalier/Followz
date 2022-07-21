import { Input } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import logo from "@assets/logo.png";
import SubscriptionModal from "@components/SubscriptionModal";

function SubscriptionPage() {
  // eslint-disable-next-line
  const [subscriptionIsValid, setSubscriptionIsValid] = useState(false);
  const [open, setOpen] = useState(false);

  const { register, handleSubmit } = useForm();

  const handleOpen = () => setOpen(!open);

  const onSubmit = () => {
    setSubscriptionIsValid(true);
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
                className="flex flex-col items-center  p-6"
              >
                <div className="space-y-6">
                  <Input
                    type="text"
                    label="Votre pseudonyme"
                    // eslint-disable-next-line
                    {...register("nickname")}
                  />
                  <Input
                    type="password"
                    label=" Votre mot de passe"
                    // eslint-disable-next-line
                    {...register("password")}
                  />
                </div>
                <SubscriptionModal
                  buttonType="submit"
                  onClick={handleOpen}
                  open={open}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPage;
