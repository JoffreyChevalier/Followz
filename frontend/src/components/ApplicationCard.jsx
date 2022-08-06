import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

function ApplicationCard({
  path,
  websitelogo,
  title,
  technologo,
  company,
  url,
  linkText,
  status,
  onDelete,
  menuItemList,
  onUpdate,
}) {
  return (
    <Card className="max-w-[17rem] min-w-xs w-full pr-2">
      <i
        className="fa-solid fa-circle-xmark absolute -right-1 -top-1 text-red-500 scale-125 hover:transition hover:duration-100 hover:ease-in hover:scale-150 cursor-pointer"
        onClick={onDelete}
      />

      <div className="flex items-center">
        <CardHeader floated={false} className="h-fit w-16">
          <img src={websitelogo} alt="logo du site de recherche d'emplois" />
        </CardHeader>

        <div className="flex flex-col">
          <div className="flex items-center">
            <Typography
              variant="h5"
              className="text-primary text-base xs:text-xl"
            >
              {title}
            </Typography>{" "}
            <img
              src={technologo}
              alt="Technologie de dév"
              className="h-fit w-5 ml-2"
            />
          </div>
          <Typography className="text-primary/70 text-[.85rem] xs:text-base">
            {company}
          </Typography>
        </div>
      </div>

      <CardBody className="text-center ">
        {linkText === "Bouche à oreille" ? (
          <p>{linkText}</p>
        ) : (
          <a target="_blank" href={url} className="underline" rel="noreferrer">
            {linkText}
          </a>
        )}
      </CardBody>

      <CardFooter divider className="flex items-center justify-between py-3">
        {path === "/archives" ? (
          <Button
            disabled
            color="grey"
            size="sm"
            variant="gradient"
            className="group"
          >
            {status}
          </Button>
        ) : (
          <Menu>
            <MenuHandler>
              <Button
                color="green"
                size="sm"
                variant="gradient"
                className="group"
              >
                {status}
                <i className="fa-solid fa-sync ml-4 group-hover:animate-spin-slow group-hover:motion-reduce:animate-spin" />
              </Button>
            </MenuHandler>
            <MenuList>
              {menuItemList.map((menuItem, key) =>
                menuItem === "Archivé" ? (
                  <div key={key} className="border-t">
                    <MenuItem
                      className="mt-1 bg-grey-100 rounded-b-lg"
                      key={key}
                      value={menuItem}
                      onClick={() => onUpdate(menuItem)}
                    >
                      {menuItem}
                    </MenuItem>
                  </div>
                ) : (
                  <MenuItem
                    className="mb-1"
                    key={key}
                    value={menuItem}
                    onClick={() => onUpdate(menuItem)}
                  >
                    {menuItem}
                  </MenuItem>
                )
              )}
            </MenuList>
          </Menu>
        )}
      </CardFooter>
    </Card>
  );
}

export default ApplicationCard;
