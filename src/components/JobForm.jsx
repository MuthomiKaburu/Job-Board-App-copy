import { useState } from "react";
import { useJobContext } from "../context/JobContext";
import { toast } from "react-toastify";
import "./JobForm.css";

function JobForm() {
  const { addJob } = useJobContext();

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    company: "",
    salary: "",
    startDate: "",
    location: "",
    qualification: "",
    education: "",
    name: "",
    mobileNumber: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    if (!formData.jobDescription.trim()) newErrors.jobDescription = "Description required";
    if (!formData.company.trim()) newErrors.company = "Company required";
    if (!formData.location.trim()) newErrors.location = "Location required";
    if (!formData.email.trim()) newErrors.email = "Email required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newJob = {
                ...formData,
        salary: Number(formData.salary),
        createdAt: new Date()
      };

      addJob(newJob);

      toast.success("Job successfully posted!", { position: "top-center", autoClose: 3000 });

      setFormData({
        jobTitle: "",
        jobDescription: "",
        company: "",
        salary: "",
        startDate: "",
        location: "",
        qualification: "",
        education: "",
        name: "",
        mobileNumber: "",
        email: ""
      });
    }
  };

  return (
    <div className="form-container">
      <h2>Create Job Posting</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} />
        {errors.jobTitle && <p className="error">{errors.jobTitle}</p>}

        <textarea name="jobDescription" placeholder="Job Description" value={formData.jobDescription} onChange={handleChange} />
        {errors.jobDescription && <p className="error">{errors.jobDescription}</p>}

        <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
        {errors.company && <p className="error">{errors.company}</p>}

        <input type="number" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} />

        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />

        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        {errors.location && <p className="error">{errors.location}</p>}

        <input type="text" name="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleChange} />

        <input type="text" name="education" placeholder="Education Level" value={formData.education} onChange={handleChange} />

        <input type="text" name="name" placeholder="Contact Person Name" value={formData.name} onChange={handleChange} />

        <input type="text" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} />

        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default JobForm;