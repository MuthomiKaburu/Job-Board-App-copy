import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Update.css";

const API_URL = "http://localhost:3001/jobs";

export default function AdminPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [jobNotFound, setJobNotFound] = useState(false);

  // Store the full job so PUT won't wipe fields you don't edit
  const [job, setJob] = useState(null);

  // Only fields you edit in the form
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    company: "",
    salary: ""
  });

  // 1) Load job by id
  useEffect(() => {
    async function loadJob() {
      try {
        setLoading(true);
        setJobNotFound(false);

        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) {
          setJobNotFound(true);
          setJob(null);
          return;
        }

        const data = await res.json();
        setJob(data);

        setFormData({
          jobTitle: data.jobTitle ?? data.title ?? "",
          jobDescription: data.jobDescription ?? data.description ?? "",
          company: data.company ?? "",
          salary: data.salary ?? ""
        });
      } catch (err) {
        console.error("Error loading job:", err);
        setJobNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    loadJob();
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // 2) Update job (PUT)
  async function handleUpdate(e) {
    e.preventDefault();

    if (!job) return;

    try {
      const payload = {
        ...job, // keep all old fields
        ...formData, // overwrite edited ones
        id: Number(id),
        salary: Number(formData.salary)
      };

      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Update failed");

      navigate("/jobs");
    } catch (err) {
      console.error(err);
      alert("Failed to update job. Check the server and try again.");
    }
  }

  // 3) Delete job (DELETE)
  async function handleDelete() {
    const ok = window.confirm("Are you sure you want to delete this job?");
    if (!ok) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");

      navigate("/jobs");
    } catch (err) {
      console.error(err);
      alert("Failed to delete job. Check the server and try again.");
    }
  }

  if (loading) {
    return (
      <div className="admin-page">
        <h2>Edit Job</h2>
        <p>Loading...</p>
      </div>
    );
  }

  if (jobNotFound) {
    return (
      <div className="admin-page">
        <h2>Edit Job</h2>
        <p>Job not found.</p>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <h2>Edit Job</h2>

      <form onSubmit={handleUpdate}>
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

        <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
          <button type="submit">Update Job</button>

          <button
            type="button"
            onClick={handleDelete}
            style={{
              background: "#dc2626",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "10px 14px",
              cursor: "pointer"
            }}
          >
            Delete Job
          </button>
        </div>
      </form>
    </div>
  );
}