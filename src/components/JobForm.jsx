import { useState } from "react";

function JobForm() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    company: "",
    salary: "",
    startDate: "",
    noticePeriod: "",
    name: "",
    mobileNumber: "",
    email: "",
    location: "",
    qualification: "",
    education: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to post job");
      }

      alert("Job successfully posted!");

      setFormData({
        jobTitle: "",
        jobDescription: "",
        company: "",
        salary: "",
        startDate: "",
        noticePeriod: "",
        name: "",
        mobileNumber: "",
        email: "",
        location: "",
        qualification: "",
        education: "",
      });

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="form-container">
      <h2>Create Job Posting</h2>

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
          placeholder="Approximate Salary"
          value={formData.salary}
          onChange={handleChange}
        />

        <label>Starting Date:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />

        <input
          type="text"
          name="noticePeriod"
          placeholder="Notice Period"
          value={formData.noticePeriod}
          onChange={handleChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Contact Person Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />

        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
        />

        <input
          type="text"
          name="education"
          placeholder="Education Level"
          value={formData.education}
          onChange={handleChange}
        />

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default JobForm;
