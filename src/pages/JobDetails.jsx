import { useParams } from "react-router-dom";
import { useJobContext } from "../context/JobContext";
import "./JobDetails.css"

export default function JobDetails() {
  const { id } = useParams(); // gets job ID from URL
  const { jobs } = useJobContext();

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) return <p>Job not found</p>;

  return (
    <div className="main">
        <div className="job-details">
      <h2>{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Company: {job.company}</p>
      <p>Salary: {job.salary}</p>
      <p>Location: {job.location}</p>
      <p>Qualification: {job.qualification}</p>
      <p>Education: {job.education}</p>
      <p>Contact: {job.contactName} | {job.mobileNumber} | {job.email}</p>
      <p>Start Date: {job.startDate}</p>
    </div>

    </div>
    
  );
}
