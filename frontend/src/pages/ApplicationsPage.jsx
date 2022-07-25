import ApplicationCard from "@components/ApplicationCard";
import Navbar from "@components/Navbar";

import { useLocation } from "react-router-dom";

function ApplicationsPage() {
  // eslint-disable-next-line
  const { pathname, ...others } = useLocation();
  return (
    <div className="flex items-center">
      <div>
        <Navbar path={pathname} />
      </div>
      <div className="flex flex-wrap gap-10 mx-10">
        <ApplicationCard /> <ApplicationCard />
      </div>
    </div>
  );
}

export default ApplicationsPage;
