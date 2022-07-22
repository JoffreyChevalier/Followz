import Navbar from "@components/Navbar";

import { useLocation } from "react-router-dom";

function ArchivesPage() {
  // eslint-disable-next-line
  const { pathname, ...others } = useLocation();
  return (
    <div>
      <Navbar path={pathname} />
    </div>
  );
}

export default ArchivesPage;
