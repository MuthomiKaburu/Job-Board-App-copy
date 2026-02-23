import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobForm from "./components/JobForm";
import JobDetails from "./pages/JobDetails";
import HomePage from "./pages/HomePage";
import Apply from "./pages/Apply";
import Navbar from "./components/Navbar";
import UpdateJob from "./pages/UpdateJob";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<JobForm />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/apply/:id" element={<Apply />} />
        <Route path="/edit/:id" element={<UpdateJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;