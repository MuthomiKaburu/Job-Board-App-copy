import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import jobsData from "../../db.json";
import "./HomePage.css";

export default function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load jobs from the imported JSON data
    setJobs(jobsData.jobs);
    setFilteredJobs(jobsData.jobs);
    setLoading(false);
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchTerm, jobs]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) return <p>Loading jobs...</p>;

  return (
    <div className="home-page">
      <h1>Job Board</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for jobs by title, company, or location..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="jobs-container">
        {filteredJobs.length === 0 ? (
          <p>No jobs found matching your search.</p>
        ) : (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        )}
      </div>
    </div>
  );
}
