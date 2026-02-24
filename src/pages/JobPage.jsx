import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import "./JobPage.css";

export default function JobPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://job-board-app-copy.onrender.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
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