// Introduction to Axios

// Definition

// Axios is a promise-based HTTP client for making API requests.

// Axios helps React applications communicate with backend servers.

// axios.get() – Sends a GET request.
// await – Waits for the API response.
// response – Stores the server response.
// response.data – Contains the actual API data.


// Fetch API vs Axios


// 1.Fetch API

// Definition: Fetch API is a built-in JavaScript function used to make HTTP requests and 
// retrieve data from servers.

const fetchResponse = await fetch(
  "https://jsonplaceholder.typicode.com/users"
);

const fetchData = await fetchResponse.json();

console.log(fetchData);


// 2.Axios:

// Definition: Axios is a promise-based JavaScript library used to send HTTP requests and 
// communicate with backend servers.

const axiosResponse = await axios.get(
  "https://jsonplaceholder.typicode.com/users"
);

console.log(axiosResponse.data);




// HTTP Methods

// HTTP methods define what action we want to perform on the server.

// There are five important methods.

// Method	                               Definition
// GET	                               Retrieves existing data.
// POST	                                Creates new data.
// PUT	                              Replaces existing data.
// PATCH	                      Partially updates existing data.
// DELETE	                            Removes existing data.



// Request Headers and Request Body

// Request Headers:

// Definition: Headers provide additional information about API requests.

// Headers commonly contain:

// Content-Type
// Authorization
// Accept


const headerResponse = await axios.get(
  "https://jsonplaceholder.typicode.com/users",
  {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
);

console.log(headerResponse.data);


// Request Body:

// Definition: Request body contains data sent to the server.

const bodyResponse = await axios.post(
  "https://jsonplaceholder.typicode.com/users",
  {
    name: "Adithya",
    email: "adithya@gmail.com",
    city: "Ongole"
  }
);

console.log(bodyResponse.data);

// Query Parameters:

// Query parameters pass additional information through URL to filter or customize API requests.

axios.get("/users", {
  params: {
    city: "Ongole",
    age: 23
  }
});


// Path Parameters

// Definition: Path parameters identify specific resources through values embedded directly in 
// the URL path.

axios.get("/users/101");


// Difference
// Query Parameters	                        Path Parameters
// Used for filtering	               Used for identification
// Follow ?	                            Appear inside URL
// /posts?userId=1	                       /users/1


// Authentication Tokens (Introduction)
// Definition

// Authentication tokens verify user identity during API requests.

// When a user logs in successfully, the backend generally provides an authentication token.

// The frontend sends that token with subsequent protected API requests.


const token = "your_access_token";

const authResponse = await axios.get(
  "https://example.com/api/profile",
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);

console.log(authResponse.data);

// Authentication – Verifying user identity.
// Authorization – Checking user permissions.
// Token – Credential used for authentication.
// Bearer Token – Token sent through Authorization header.

// const token = "your_access_token";


// Error Handling: Error handling manages unexpected failures during API requests.


const handleErrors = async () => {

  try {

    const errorResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/invalid"
    );

    console.log(errorResponse.data);

  } catch (error) {

    console.log("Error:", error.message);

    if (error.response) {
      console.log("Status:", error.response.status);
    }

  }

};


// try – Executes API request.
// catch – Handles API errors.
// error.message – Displays error information.
// error.response.status – Returns HTTP status code when a response exists.


// Loading and Success States
// Loading State

// Definition: Loading state indicates an ongoing API request.

// Success State

// Definition: Success state displays successfully retrieved API data.


