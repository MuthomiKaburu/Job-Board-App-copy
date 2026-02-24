import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./JobDetail.css";

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`https://job-board-app-copy.onrender.com/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="job-details">
      <h2>{job.jobTitle}</h2>
      <p><strong>Description:</strong> {job.jobDescription}</p>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Salary:</strong> KES {job.salary}</p>
      <p><strong>Start Date:</strong> {job.startDate}</p>
      <p><strong>Notice Period:</strong> {job.noticePeriod}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Qualification:</strong> {job.qualification}</p>
      <p><strong>Education:</strong> {job.education}</p>
      <p><strong>Contact Person:</strong> {job.name}</p>
      <p><strong>Email:</strong> {job.email}</p>
      <p><strong>Mobile:</strong> {job.mobileNumber}</p>

      <button
        className="apply-btn"
        onClick={() => navigate(`/apply/${job.id}`)}>
        Apply Now
      </button>
    </div>
  );
}
