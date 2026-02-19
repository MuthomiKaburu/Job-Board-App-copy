<<<<<<< HEAD
import { Link } from "react-router-dom";
import "./JobCard.css";
=======
import React from "react";
import { Link } from "react-router-dom";
import "./JobCard.css"
>>>>>>> origin/main

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.jobTitle}</h3>
<<<<<<< HEAD
      <p>{job.company}</p>
      <p>Location: {job.location}</p>
      <p>Salary: KES {job.salary}</p>
=======
      <p>{job.jobDescription}</p>
      <p>Company: {job.company}</p>
      <p>Salary: {job.salary}</p>
>>>>>>> origin/main

      <Link to={`/jobs/${job.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}
