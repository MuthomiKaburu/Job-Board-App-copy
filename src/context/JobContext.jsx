import React, { createContext, useContext, useEffect, useState } from "react";

const JobContext = createContext();

export default function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/jobs")
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error(err));
  }, []);

  // CREATE
  function addJob(job) {
    fetch("http://localhost:3001/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job)
    })
      .then(res => res.json())
      .then(newJob => setJobs(prev => [...prev, newJob]))
      .catch(err => console.error(err));
  }

  // UPDATE
  function updateJob(updatedJob) {
    fetch(`http://localhost:3001/jobs/${updatedJob.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJob)
    })
      .then(res => res.json())
      .then(data => {
        setJobs(prev =>
          prev.map(job => (job.id === data.id ? data : job))
        );
      })
      .catch(err => console.error(err));
  }

  // DELETE
  function deleteJob(id) {
    fetch(`http://localhost:3001/jobs/${id}`, { method: "DELETE" })
      .then(() => setJobs(prev => prev.filter(job => job.id !== id)))
      .catch(err => console.error(err));
  }

  return (
    <JobContext.Provider value={{ jobs, addJob, updateJob, deleteJob }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobContext() {
  return useContext(JobContext);
}