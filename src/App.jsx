import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobForm from "./components/JobForm";
import JobPage from "./pages/JobPage";
import JobDetails from "./pages/JobDetails";
import HomePage from "./pages/HomePage";
import Apply from "./pages/Apply";


function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<JobForm />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/apply/:id" element={<Apply />} />

      </Routes>
  );
}

export default App;
