import React from "react";
import { Link } from "react-router-dom";
import "./JobCard.css"

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.jobTitle}</h3>
      <p>{job.jobDescription}</p>
      <p>Company: {job.company}</p>
      <p>Salary: {job.salary}</p>

      <Link to={`/jobs/${job.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}
