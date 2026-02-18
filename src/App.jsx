import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobForm from "./components/JobForm";
import JobPage from "./pages/JobPage";
import JobProvider from "./context/JobContext";
import { ToastContainer } from "react-toastify";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <JobProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobPage />} />
          <Route path="/form" element={<JobForm />} />
          <Route path="/jobs/:id" element={<JobDetails />} />


        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    

    </JobProvider>
  );
}

export default App;
