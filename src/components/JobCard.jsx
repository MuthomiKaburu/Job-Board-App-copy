import { Link } from "react-router-dom";
import "./JobCard.css";

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.jobTitle}</h3>
      <p>{job.company}</p>
      <p>Location: {job.location}</p>
      <p>Salary: KES {job.salary}</p>

      <Link to={`/jobs/${job.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}
