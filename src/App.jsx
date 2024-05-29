import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/home/Home";
import { Navbar } from "./pages/navbar/Navbar";
import { ProjectDetails } from "./pages/projectDetails/ProjectDetails";
import { Plan } from "./pages/subcription/Plan";
import { IssueDetails } from "./pages/issueDetails/IssueDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/project/:id/issue/:issueId" element={<IssueDetails />} />
        <Route path="/subcripition/upgrade" element={<Plan />} />
      </Routes>
    </>
  );
}

export default App;
