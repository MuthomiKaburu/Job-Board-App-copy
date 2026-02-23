import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import jobsData from "../../db.json";
import "./JobPage.css";

export default function JobPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load jobs from the imported JSON data
    setJobs(jobsData.jobs);
    setLoading(false);
  }, []);

  if (loading) return <p>Loading jobs...</p>;

  return (
    <div className="jobs-page">
      <h2>Available Jobs</h2>

      {jobs.length === 0 ? (
        <p>No Jobs Found</p>
      ) : (
        <div className="jobs-container">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
