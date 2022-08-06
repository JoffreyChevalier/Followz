import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  fecthApplications,
  deleteApplications,
  updateApplications,
} from "@services/api";

import ConfirmationModal from "@components/ConfirmationModal";
import ApplicationCard from "@components/ApplicationCard";
import Navbar from "@components/Navbar";

import helloworklogo from "@assets/sitelogo/helloworklogo.jpeg";
import indeedlogo from "@assets/sitelogo/indeedlogo.jpeg";
import linkedinlogo from "@assets/sitelogo/linkedInlogo.jpeg";
import monsterlogo from "@assets/sitelogo/monsterlogo.jpeg";
import w2tjlogo from "@assets/sitelogo/w2tjlogo.jpeg";
import womlogo from "@assets/sitelogo/womlogo.jpeg";
import othercompanylogo from "@assets/sitelogo/othercompanylogo.jpeg";
import javalogo from "@assets/technologo/javalogo.jpeg";
import javascriptlogo from "@assets/technologo/javascriptlogo.jpeg";
import nodelogo from "@assets/technologo/nodejslogo.jpeg";
import othertechnologo from "@assets/technologo/othertechnologo.jpeg";
import phplogo from "@assets/technologo/phplogo.jpeg";
import pythonlogo from "@assets/technologo/pythonlogo.jpeg";
import rubylogo from "@assets/technologo/rubylogo.png";

function ArchivesPage() {
  // eslint-disable-next-line
  const { pathname } = useLocation();
  const [applications, setApplications] = useState([]);
  const [applicationToDelete, setApplicationToDelete] = useState();

  const websiteImageBindingList = {
    hellowork: helloworklogo,
    linkedin: linkedinlogo,
    indeed: indeedlogo,
    monster: monsterlogo,
    welcometothejungle: w2tjlogo,
    wom: womlogo,
  };

  const technoImageBindingList = {
    java: javalogo,
    js: javascriptlogo,
    node: nodelogo,
    other: othertechnologo,
    php: phplogo,
    python: pythonlogo,
    ruby: rubylogo,
  };

  const menuItemList = [
    "CV envoyé",
    "Entretien décroché",
    "Attente de réponse",
    "Archivé",
  ];

  const refreshApplications = async () => {
    setApplications(await fecthApplications());
  };

  useEffect(() => {
    refreshApplications();
  }, [applications]);

  const resolveApplicationImage = (bindingList, imageUrl) => {
    for (const pattern of Object.keys(bindingList)) {
      if (imageUrl?.includes(pattern)) {
        return bindingList[pattern];
      }
    }
    return othercompanylogo;
  };

  const onDeleteApplication = async () => {
    try {
      await deleteApplications(applicationToDelete.id);
      refreshApplications();
    } catch (err) {
      console.error(err);
    } finally {
      setApplicationToDelete(null);
    }
  };

  const onUpdateAppliccation = async (applicationId, statusToUpdate) => {
    try {
      await updateApplications({ id: applicationId, status: statusToUpdate });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <ConfirmationModal
        open={!!applicationToDelete}
        onConfirm={onDeleteApplication}
        onCancel={() => setApplicationToDelete(null)}
      >
        Voulez-vous vraiment supprimer la candidature de{" "}
        {applicationToDelete?.company} ?
      </ConfirmationModal>
      <div className="flex items-start justify-center ml-20 mr-22 min-h-screen">
        <Navbar path={pathname} />
        <div className="flex flex-wrap justify-center gap-10 my-5 mr-5">
          {applications.map(
            (application) =>
              application.archived === true && (
                <ApplicationCard
                  path={pathname}
                  key={application.id}
                  websitelogo={resolveApplicationImage(
                    websiteImageBindingList,
                    application.url
                  )}
                  title={application.jobTitle}
                  technologo={resolveApplicationImage(
                    technoImageBindingList,
                    application.techno
                  )}
                  company={application.company}
                  url={application.url}
                  linkText={
                    application.url === "wom"
                      ? "Bouche à oreille"
                      : "Lien vers l'annonce"
                  }
                  status={application.status}
                  cardId={application.id}
                  onDelete={() => setApplicationToDelete(application)}
                  menuItemList={menuItemList}
                  onUpdate={(newStatusValue) =>
                    onUpdateAppliccation(application.id, newStatusValue)
                  }
                />
              )
          )}
        </div>
      </div>
    </>
  );
}

export default ArchivesPage;
