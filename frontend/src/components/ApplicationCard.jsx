import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

function ApplicationCardS({ imgSrc, title, company, url, status }) {
  return (
    <Card className="max-w-xs">
      <CardHeader floated={false}>
        <img
          src={imgSrc}
          alt="logo du site de recherche d'emplois"
          className="h-16 w-16 rounded-lg"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {title}
        </Typography>
        <Typography>{company}</Typography>

        <Typography>{url}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{status}</Typography>
      </CardFooter>
    </Card>
  );
}

export default ApplicationCardS;
