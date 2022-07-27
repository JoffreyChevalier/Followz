import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import DeleteApplicationCardModal from "./DeleteApplicationCardModal";

function ApplicationCardS({
  websitelogo,
  title,
  technologo,
  company,
  url,
  linkText,
  status,
}) {
  return (
    <Card className="max-w-[17rem] min-w-xs w-full pr-2">
      <DeleteApplicationCardModal />
      <div className="flex items-center">
        <CardHeader floated={false} className="h-fit w-16">
          <img src={websitelogo} alt="logo du site de recherche d'emplois" />
        </CardHeader>
        <div className="flex flex-col">
          <div className="flex items-center">
            <Typography
              variant="h5"
              className="text-primary underline text-base sm:text-xl"
            >
              {title}
            </Typography>{" "}
            <img
              src={technologo}
              alt="Technologie de dév"
              className="h-fit w-5 ml-2"
            />
          </div>
          <Typography className="text-primary/70 text-[.85rem] sm:text-base">
            {company}
          </Typography>
        </div>
      </div>
      <CardBody className="text-center">
        {linkText === "Bouche à oreille" ? (
          <p>{linkText}</p>
        ) : (
          <a target="_blank" href={url} rel="noreferrer">
            {linkText}
          </a>
        )}
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{status}</Typography>
      </CardFooter>
    </Card>
  );
}

export default ApplicationCardS;
