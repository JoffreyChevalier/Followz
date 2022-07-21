import { Routes, Route } from "react-router-dom";

import UserContextProvider from "@contexts/UserContextProvider";
import ProtectedRoute from "@components/ProtectedRoute";

import LoginPage from "@pages/LoginPage";
import SubscriptionPage from "@pages/SubscriptionPage";
import ApplicationsPage from "@pages/ApplicationsPage";
import ArchivesPage from "@pages/ArchivesPage";
import ProfilePage from "@pages/ProfilePage";

import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <div className="bg-primary/10">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="inscription" element={<SubscriptionPage />} />
          <Route
            path="candidatures"
            element={
              <ProtectedRoute>
                <ApplicationsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="archives"
            element={
              <ProtectedRoute>
                <ArchivesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="profil"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
