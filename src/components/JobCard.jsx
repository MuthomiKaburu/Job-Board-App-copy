import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useJobContext } from "../context/JobContext";
import "./JobCard.css";

export default function JobCard({ job }) {
  const { deleteJob } = useJobContext();
  const navigate = useNavigate();

  function handleDelete() {
    deleteJob(job.id);
  }

  return (
    <div className="job-card">
      <h3>{job.jobTitle}</h3>
      <p>{job.jobDescription}</p>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>Salary: KES {job.salary}</p>

      <div className="card-buttons">
        <Link to={`/jobs/${job.id}`}>
          <button>View Details</button>
        </Link>
        <Link to={`/update/${job.id}`}>
        <button>Update</button>        
        </Link>
        
        <button onClick={() => deleteJob(job.id)}>
          Delete
        </button>
      </div>
      <div className="card-buttons">
        <Link to={`/jobs/${job.id}`}>
          <button className="view-btn">View</button>
        </Link>

        <button
          className="edit-btn"
          onClick={() => navigate(`/edit/${job.id}`)}
        >
          Update
        </button>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}