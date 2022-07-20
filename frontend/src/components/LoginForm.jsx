import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { UserContext } from "@contexts/UserContextProvider";
import { login } from "@services/api";

import { Input, Button } from "@material-tailwind/react";

import logo from "@assets/logo.png";

export default function LoginForm() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { setUser } = useContext(UserContext);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData) => {
    try {
      setUser(await login(formData));
      navigate("/candidatures");
    } catch (err) {
      setError("Identifiants incorrects");
      reset();
    }
  };

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 mt-0 mb-0 space-y-10 rounded-lg shadow-lg"
        >
          <img src={logo} alt="Followz logo" />

          <p className="text-center text-md sm:text-lg lg:text-xl">
            Content de vous revoir 😃 !<br /> Connectez-vous vite pour suivre
            vos candidatures et en ajouter de nouvelles 👍
          </p>

          <div className="flex flex-col items-center space-y-6">
            {error && (
              <p className="uppercase text-center text-red-600 text-xl sm:text-2xl">
                {error}
              </p>
            )}
            {/* eslint-disable-next-line */}
            <Input type="text" label="Pseudonyme" {...register("nickname")} />

            <Input
              type="password"
              label="Mot de Passe"
              // eslint-disable-next-line
              {...register("password")}
            />

            <Button type="submit" size="md" className="bg-primary">
              Connexion
            </Button>
          </div>
          <div className="text-center text-sm sm:text-base hover:text-secondary">
            <Link to="inscription">
              Pas encore inscrit ? Cliquez vite ici !
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
