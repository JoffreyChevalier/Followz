import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { fecthApplications } from "@services/api";
import { UserContext } from "@contexts/UserContextProvider";

import ApplicationCard from "@components/ApplicationCard";
import Navbar from "@components/Navbar";

import hellowork from "@assets/sitelogo/helloworklogo.jpeg";
import indeed from "@assets/sitelogo/indeedlogo.jpeg";
import linkedin from "@assets/sitelogo/linkedInlogo.jpeg";
import monster from "@assets/sitelogo/monsterlogo.jpeg";
import w2tj from "@assets/sitelogo/w2tjlogo.jpeg";
import wom from "@assets/sitelogo/womlogo.jpeg";

function ApplicationsPage() {
  const { user } = useContext(UserContext);
  // eslint-disable-next-line
  const { pathname, ...others } = useLocation();
  const [applications, setApplications] = useState([]);

  const applicationImageBindings = {
    hellowork,
    linkedin,
    indeed,
    monster,
    welcometothejungle: w2tj,
    wom,
  };

  useEffect(() => {
    (async () => {
      setApplications(await fecthApplications(user.id));
    })();
  }, []);

  const resolveApplicationImage = (imageUrl) => {
    for (const pattern of Object.keys(applicationImageBindings)) {
      if (imageUrl.includes(pattern)) {
        return applicationImageBindings[pattern];
      }
    }

    return "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwedevelopment.in%2Fwp-content%2Fuploads%2F2019%2F08%2Fno_image_png_934948.jpg&f=1&nofb=1";
  };

  return (
    <div className="flex items-center justify-center ml-20 min-h-screen">
      <div>
        <Navbar path={pathname} />
      </div>
      <div className="flex flex-wrap justify-center gap-10 my-5 mr-5">
        {applications.map((application, key) => (
          <ApplicationCard
            key={key}
            imgSrc={resolveApplicationImage(application.url)}
            title={application.jobTitle}
            company={application.company}
            url={application.url}
            status={application.status}
          />
        ))}
      </div>
    </div>
  );
}

export default ApplicationsPage;
