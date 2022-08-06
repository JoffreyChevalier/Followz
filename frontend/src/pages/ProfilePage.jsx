import Navbar from "@components/Navbar";

import { useLocation } from "react-router-dom";

import workinprogress from "@assets/workinprogress.png";

function ProfilePage() {
  // eslint-disable-next-line
  const { pathname } = useLocation();
  return (
    <div className="flex items-start justify-center ml-20 mr-22 min-h-screen">
      <Navbar path={pathname} />
      <div className="flex items-center justify-center min-h-screen">
        <img
          src={workinprogress}
          alt="en cours de développement"
          className="flex h-2/4 w-2/4"
        />
      </div>
    </div>
  );
}

export default ProfilePage;
