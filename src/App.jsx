import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/home/Home";
import { Navbar } from "./pages/navbar/Navbar";
import { ProjectDetails } from "./pages/projectDetails/ProjectDetails";
import { Plan } from "./pages/subcription/Plan";
import { IssueDetails } from "./pages/issueDetails/IssueDetails";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";

import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { store } from "./redux/Store";
import { loadUserAction } from "./redux/actions/authActions";
import { UserProfile } from "./pages/auth/UserProfile";
import { ProtectedRoute } from "./pages/route/ProtectedRoute";

function App() {
  useEffect(() => {
    store.dispatch(loadUserAction());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />

          <Route
            exact
            path="/search/category=:category&tags=:tag"
            element={<Home />}
          />
          <Route exact path="/search/:name" element={<Home />} />

          <Route exact path="/project/:id" element={<ProjectDetails />} />
          <Route
            exact
            path="/project/:id/issue/:issueId"
            element={<IssueDetails />}
          />
          <Route
            exact
            path="/profile/me"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route exact path="/subcription/upgrade" element={<Plan />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
