import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    course: "",
    skills: [],
    address: "",
    profile: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle all normal input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
  };

  // Handle checkboxes
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value),
    }));

    setErrors((prev) => ({
      ...prev,
      skills: "",
    }));

    setSubmitted(false);
  };

  // Handle file input
  const handleFile = (e) => {
    const file = e.target.files[0];

    setFormData((prev) => ({
      ...prev,
      profile: file || null,
    }));

    setSubmitted(false);
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (Number(formData.age) < 18 || Number(formData.age) > 60) {
      newErrors.age = "Age must be between 18 and 60";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    if (formData.skills.length === 0) {
      newErrors.skills = "Select at least one skill";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.profile) {
      newErrors.profile = "Please upload a profile picture";
    } else if (!formData.profile.type.startsWith("image/")) {
      newErrors.profile = "Please upload a valid image";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      course: "",
      skills: [],
      address: "",
      profile: null,
    });

    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="page">
      <div className="registration-container">

        {/* FORM SECTION */}
        <div className="form-card">
          <h1>Registration Form</h1>
          <p className="subtitle">Fill in your details to register</p>

          <form onSubmit={handleSubmit} noValidate>

            {/* Name */}
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit phone number"
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            {/* Age */}
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
              />
              {errors.age && <p className="error">{errors.age}</p>}
            </div>

            {/* Gender */}
            <div className="form-group">
              <label>Gender</label>

              <div className="options">
                {["Male", "Female", "Other"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="gender"
                      value={item}
                      checked={formData.gender === item}
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>

              {errors.gender && <p className="error">{errors.gender}</p>}
            </div>

            {/* Course */}
            <div className="form-group">
              <label>Course</label>

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Select a course</option>
                <option value="React JS">React JS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="Full Stack Development">Full Stack Development</option>
              </select>

              {errors.course && <p className="error">{errors.course}</p>}
            </div>

            {/* Skills */}
            <div className="form-group">
              <label>Skills</label>

              <div className="options">
                {["HTML", "CSS", "JavaScript", "React", "Node.js"].map(
                  (skill) => (
                    <label key={skill}>
                      <input
                        type="checkbox"
                        value={skill}
                        checked={formData.skills.includes(skill)}
                        onChange={handleCheckbox}
                      />
                      {skill}
                    </label>
                  )
                )}
              </div>

              {errors.skills && <p className="error">{errors.skills}</p>}
            </div>

            {/* Address */}
            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="3"
              />
              {errors.address && <p className="error">{errors.address}</p>}
            </div>

            {/* Profile Image */}
            <div className="form-group">
              <label>Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFile}
              />
              {errors.profile && <p className="error">{errors.profile}</p>}
            </div>

            {/* Buttons */}
            <div className="button-group">
              <button type="submit" className="submit-btn">
                Register
              </button>

              <button
                type="button"
                className="reset-btn"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>

          {/* Success Message */}
          {submitted && (
            <div className="success-message">
              <h3>Registration Successful!</h3>
              <p>Welcome, {formData.name}.</p>
            </div>
          )}
        </div>

        {/* LIVE PREVIEW SECTION */}
        <div className="preview-card">
          <h2>Live Preview</h2>

          {formData.profile && formData.profile.type.startsWith("image/") && (
            <img
              src={URL.createObjectURL(formData.profile)}
              alt="Profile Preview"
              className="profile-preview"
            />
          )}

          <div className="preview-item">
            <strong>Name:</strong>
            <span>{formData.name || "Not entered"}</span>
          </div>

          <div className="preview-item">
            <strong>Email:</strong>
            <span>{formData.email || "Not entered"}</span>
          </div>

          <div className="preview-item">
            <strong>Phone:</strong>
            <span>{formData.phone || "Not entered"}</span>
          </div>

          <div className="preview-item">
            <strong>Age:</strong>
            <span>{formData.age || "Not entered"}</span>
          </div>

          <div className="preview-item">
            <strong>Gender:</strong>
            <span>{formData.gender || "Not selected"}</span>
          </div>

          <div className="preview-item">
            <strong>Course:</strong>
            <span>{formData.course || "Not selected"}</span>
          </div>

          <div className="preview-item">
            <strong>Skills:</strong>
            <span>
              {formData.skills.length > 0
                ? formData.skills.join(", ")
                : "Not selected"}
            </span>
          </div>

          <div className="preview-item">
            <strong>Address:</strong>
            <span>{formData.address || "Not entered"}</span>
          </div>

          <div className="preview-item">
            <strong>Profile:</strong>
            <span>
              {formData.profile
                ? formData.profile.name
                : "Not uploaded"}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;


const [name, setName] = useState("");

const handleChange = (e) => {
    setName(e.target.value);
}
