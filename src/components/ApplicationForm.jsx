import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./ApplicationForm.css";

function ApplicationForm({ jobId, jobTitle }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    coverLetter: "",
    qualifications: ""
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    const newApplication = {
      ...formData,
      jobId,
      status: "Pending",
      appliedAt: new Date().toISOString()
    };

    try {
      setLoading(true);

      const response = await fetch("http://localhost:3001/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newApplication)
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      toast.success("Application submitted successfully!");

      setFormData({
        name: "",
        email: "",
        resume: "",
        coverLetter: "",
        qualifications: ""
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="application-form-container">
      
      <form className="application-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g sstyrec@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="resume">Resume Link</label>
          <input
            type="text"
            id="resume"
            name="resume"
            placeholder="Google Drive, Dropbox, etc."
            value={formData.resume}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            placeholder="write your cover letter here"
            rows="5"
            value={formData.coverLetter}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="qualifications">
            Why do you think you are qualified for the job?
          </label>
          <textarea
            id="qualifications"
            name="qualifications"
            placeholder="Describe your qualifications"
            rows="5"
            value={formData.qualifications}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}

export default ApplicationForm;