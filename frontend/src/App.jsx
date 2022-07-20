import { Routes, Route } from "react-router-dom";

import LoginPage from "@pages/LoginPage";
import SubscriptionPage from "@pages/SubscriptionPage";
import ApplicationsPage from "@pages/ApplicationsPage";
import ArchivesPage from "@pages/ArchivesPage";
import ProfilePage from "@pages/ProfilePage";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="inscription" element={<SubscriptionPage />} />
        <Route path="candidatures" element={<ApplicationsPage />} />
        <Route path="archives" element={<ArchivesPage />} />
        <Route path="profil" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
