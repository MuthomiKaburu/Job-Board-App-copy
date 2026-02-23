import { useParams, useNavigate } from "react-router-dom";
import { useJobContext } from "../context/JobContext";
import { useState } from "react";
import "./UpdateJob.css";
import { toast } from "react-toastify";

export default function UpdateJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, updateJob } = useJobContext();

  const jobToEdit = jobs.find((job) => job.id ==(id));

  const [formData, setFormData] = useState(jobToEdit);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateJob(formData);
    toast.success("succesfully edited");
    navigate("/");
  }

  if (!jobToEdit) return <h2>Job not found</h2>;

  return (
    <div className="update-container">
      <h2>Update Job</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
        />

        <textarea
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}