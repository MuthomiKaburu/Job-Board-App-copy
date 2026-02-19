import { useState } from "react";
import { useJobContext } from "../context/JobContext";
import { toast } from "react-toastify";

function JobForm() {
  const { addJob } = useJobContext();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    company: "",
    salary: "",
    startDate: "",
    location: "",
    qualification: "",
    education: "",
    contactName: "",
    mobileNumber: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Job title is required";
    if (!formData.description.trim()) newErrors.description = "Description required";
    if (!formData.company.trim()) newErrors.company = "Company required";
    if (!formData.location.trim()) newErrors.location = "Location required";
    if (!formData.email.trim()) newErrors.email = "Email required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newJob = {
        id: Date.now(),
        ...formData,
        salary: Number(formData.salary),
        createdAt: new Date()
      };

      addJob(newJob);

      toast.success("Job successfully posted!", {
        position: "top-center",
        autoClose: 3000
      });

      setFormData({
        title: "",
        description: "",
        company: "",
        salary: "",
        startDate: "",
        location: "",
        qualification: "",
        education: "",
        contactName: "",
        mobileNumber: "",
        email: ""
      });
    }
  };

  return (
    <div className="form-container">
      <h2>Create Job Posting</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <p className="error">{errors.title}</p>}

        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && <p className="error">{errors.description}</p>}

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />
        {errors.company && <p className="error">{errors.company}</p>}

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
        />

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
        {errors.location && <p className="error">{errors.location}</p>}

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

        <input
          type="text"
          name="contactName"
          placeholder="Contact Person Name"
          value={formData.contactName}
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
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default JobForm;
