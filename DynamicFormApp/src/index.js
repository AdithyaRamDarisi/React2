// Dynamic Form Handling
// Definition
// Dynamic Form Handling is the process of managing user input, updating data, validating
//  fields, and responding to changes in a form using React.

// React uses state to store input values and update the UI whenever the user interacts with a form.


// Controlled Components
// Definition
// A Controlled Component is a form element whose value is controlled by React state.

// React manages the input value using the value property and updates it through an onChange event.


// Handling Input Fields Dynamically
// Definition
// Dynamic input handling allows React to manage different input fields and update their values 
// whenever users enter or modify data.

// Instead of creating a separate state variable for every input, we can store multiple input 
// values inside a single object.


// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div>
//       <h2>Dynamic Input Handling</h2>

//       <input
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Name"
//       />

//       <input
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//       />

//       <input
//         name="age"
//         value={formData.age}
//         onChange={handleChange}
//         placeholder="Age"
//       />

//       <h3>Output</h3>
//       <p>{formData.name}</p>
//       <p>{formData.email}</p>
//       <p>{formData.age}</p>
//     </div>
//   );
// }

// export default App;



// Text Fields
// Definition
// Text fields allow users to enter single-line text such as names, email addresses, usernames,
//  and phone numbers.

/*{ <input type="text" placeholder="Enter your name" />  }*/

// | Type | Purpose |
// |---|---|
// | `text` | Normal text |
// | `email` | Email address |
// | `password` | Password |
// | `number` | Numeric input |
// | `tel` | Phone number |


// Text Areas
// Definition:

// A Text Area allows users to enter multiple lines of text, usually for descriptions, feedback,
//  comments, or addresses.

// Example:
// <textarea
//   placeholder="Enter your message"
//   rows="4"
// />

// Dropdowns
// Definition
// A Dropdown is a form control that allows users to select one option from a list of available options.
// Example
<select>
  <option value="">Select Course</option>
  <option value="React">React</option>
  <option value="JavaScript">JavaScript</option>
  <option value="Java">Java</option>
</select>


// Use cases
// - Selecting a course
// - Choosing a country
// - Selecting a department
// - Choosing a city


// Radio Buttons
// Definition
// Radio Buttons allow users to select only one option from a group of mutually exclusive choices.
// Example
/* {<label>
  <input type="radio" name="gender" value="Male" />
  Male
</label>

<label>
  <input type="radio" name="gender" value="Female" />
  Female
</label> }*/



// Checkboxes
// Definition
// Checkboxes allow users to select or deselect options independently. Multiple checkboxes can be
//  selected simultaneously.


/*{ <label>
  <input type="checkbox" />
  HTML
</label>

<label>
  <input type="checkbox" />
  CSS
</label>

<label>
  <input type="checkbox" />
  JavaScript
</label> }*/


// File Inputs
// Definition
// File Inputs allow users to upload files such as images, documents, PDFs, and other files 
// from their devices.

// const handleFileChange = (e) => {
//   console.log(e.target.files[0]);
// };

// <input type="file" onChange={handleFileChange} />


// Form Validation
// Definition
// Form Validation is the process of checking user input to ensure that the entered data is correct, complete, and follows the required rules before submitting a form.
// Examples of validation
// - Name should not be empty.
// - Email should be in a valid format.
// - Password should meet minimum length requirements.
// - Age should be within an acceptable range.
// - Required fields must be completed.
// Example
const [email, setEmail] = useState("");
const [error, setError] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  if (!email.includes("@")) {
    setError("Please enter a valid email");
  } else {
    setError("");
    alert("Form submitted successfully");
  }
};

<form onSubmit={handleSubmit}>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter email"
  />

  <p>{error}</p>

  <button type="submit">Submit</button>
</form>

// 11. Handling Multiple Inputs Using a Single Change Handler
// Definition
// A Single Change Handler is a reusable function that handles changes from multiple input 
// fields instead of creating individual event handlers for each field.
Example
const [formData, setFormData] = useState({
  username: "",
  email: "",
  phone: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};

// Use the same function for all inputs:
// <input name="username" onChange={handleChange} />
// <input name="email" onChange={handleChange} />
// <input name="phone" onChange={handleChange} />