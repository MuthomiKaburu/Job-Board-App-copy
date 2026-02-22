import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useJobContext } from "../context/JobContext";

export default function AdminPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, updateJob } = useJobContext();

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    company: "",
    salary: ""
  });

  useEffect(() => {
    const jobToEdit = jobs.find(
      (job) => job.id === Number(id)
    );

    if (jobToEdit) {
      setFormData({
        jobTitle: jobToEdit.jobTitle,
        jobDescription: jobToEdit.jobDescription,
        company: jobToEdit.company,
        salary: jobToEdit.salary
      });
    }
  }, [id, jobs]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateJob({
      ...formData,
      id: Number(id),
      salary: Number(formData.salary)
    });

    navigate("/");
  }

  return (
    <div className="admin-page">
      <h2>Edit Job</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />

        <textarea
          name="jobDescription"
          placeholder="Job Description"
          value={formData.jobDescription}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />

        <button type="submit">Update Job</button>
      </form>
    </div>
  );
}