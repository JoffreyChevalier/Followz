import { Controller, useForm } from "react-hook-form";
import { useContext, useState } from "react";

import { UserContext } from "@contexts/UserContextProvider";
import { createApplications } from "@services/api";

import {
  Select,
  Option,
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";

function AddApplicationsForm() {
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const jobTitleOptionList = ["Dev Fullstack", "Dev Frontend", "Dev Backend"];

  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      jobTitle: {},
    },
  });

  const handleOpen = () => setOpen(!open);

  const onSubmit = async (formData) => {
    try {
      await createApplications(formData, user.id);
      handleOpen();
      reset();
    } catch {
      reset();
    }
  };

  return (
    <div>
      <Button
        variant="text"
        type="button"
        className="text-primary text-base group mt-2 px-5 py-4 text-[1.5rem]"
        onClick={handleOpen}
      >
        +
        <span className="absolute text-xs normal-case font-medium text-white bg-grey-900 left-full ml-4 px-2 py-1.5 top-[10.55rem] -translate-y-1/2 rounded opacity-0 hover:hidden group-hover:opacity-100">
          Ajouter une candidature
        </span>
      </Button>
      <Dialog
        dismissType={{ enabled: false }}
        open={open}
        className="flex flex-col items-center justify-center max-w-screen-sm w-[90%] h-4/6 p-4"
      >
        <button
          type="button"
          className="absolute top-1 right-1 text-red-500 hover:scale-110"
          onClick={handleOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 48 48"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
          </svg>
        </button>
        <div className="flex flex-col items-center">
          <DialogHeader className="flex flex-col text-center">
            <h1 className="text-2xl text-primary sm:text-3xl">
              👏 Une de plus !! 👏
            </h1>
            <p className="mt-5 text-sm">
              Il semblerait que vous ayez trouvé une annonce qui vous coresponde
              👍
              <br />
              Peut-etre que cette fois-ci sera la bonne 🤞
            </p>
          </DialogHeader>
          <DialogBody>
            <form
              className="flex flex-col items-center space-y-5 w-[17rem]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                type="text"
                required
                pattern="[A-zÀ-ž0-9\s]+"
                title="Ponctuations et caractères spéciaux interdits"
                label="Entreprise"
                // eslint-disable-next-line
                {...register("company")}
              />
              <Controller
                name="jobTitle"
                control={control}
                render={({ field }) => (
                  <Select label="Type de job" {...field}>
                    {jobTitleOptionList.map((value, key) => (
                      <Option key={key} value={value}>
                        {value}
                      </Option>
                    ))}
                  </Select>
                )}
              />
              <Controller
                name="techno"
                control={control}
                render={({ field }) => (
                  <Select label="Langage" {...field}>
                    <Option value="java">Java</Option>
                    <Option value="js">Javascript</Option>
                    <Option value="node">Node.JS</Option>
                    <Option value="php">PHP</Option>
                    <Option value="python">Python</Option>
                    <Option value="ruby">Ruby</Option>
                    <Option value="other">Autre langage</Option>
                  </Select>
                )}
              />
              <Input
                type="url"
                required
                label="Lien de l'annonce"
                // eslint-disable-next-line
                {...register("url")}
              />
              <div>
                <Button size="md" type="submit" className="bg-primary w-fit">
                  <span>Ajouter ma candidature</span>
                </Button>
              </div>
            </form>
          </DialogBody>
        </div>
      </Dialog>
    </div>
  );
}

export default AddApplicationsForm;
