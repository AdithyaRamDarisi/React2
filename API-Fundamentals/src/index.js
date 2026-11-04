// API Fundamentals
// Definition

// API stands for Application Programming Interface. It allows two applications to communicate 
// and exchange data.

// Real-world example

// Imagine a weather application:

// You open the weather application.
// It requests weather information from an API.
// The API gets the weather information from a server.
// The server sends the information back.
// The application displays the weather.


// const weatherData = {
//     city: "Ongole",
//     temperature: 32,
//     condition: "Sunny"
// };

// console.log(weatherData.city);
// console.log(weatherData.temperature);


// Client-Server Architecture
// Definition

// Client-server architecture is a model where clients request data and servers process 
// requests and return responses.

// Main components
// Client: Requests information.
// Server: Processes requests.
// Database: Stores information.
// API: Connects client and server.


// React Application (Client)
//           |
//           | API Request
//           |
//      Backend Server
//           |
//           | Database Query
//           |
//        Database
//           |
//           | Data
//           |
//      Backend Server
//           |
//           | API Response
//           |
// React Application


// Example:

// const clientRequest = "Get Products";

// function serverResponse(request) {
//     return "Products received successfully";
// }

// console.log(serverResponse(clientRequest));



// REST APIs
// Definition

// REST stands for Representational State Transfer. REST APIs allow applications to communicate using HTTP methods.

// Important HTTP methods
// Method	                     Description                	Example
// GET	                         Retrieves data	           Get all products
// POST	                          Creates new data	        Add a product
// PUT	                        Replaces existing data	     Replace product details
// PATCH	                     Updates specific data	      Update product price
// DELETE	                        Deletes data	             Remove a product


// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "GET"
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));


// JSON Data Format
// Definition

// JSON stands for JavaScript Object Notation. It is a lightweight format used to exchange data between applications.

// Example
// {
//     "id": 1,
//     "name": "Adithya",
//     "age": 23,
//     "role": "Frontend Developer",
//     "skills": ["HTML", "CSS", "JavaScript", "React"],
//     "isActive": true
// }


// Important JSON rules
// Data is stored in key-value pairs.
// Keys must use double quotes.
// Strings must use double quotes.
// Numbers do not require quotes.
// Arrays use square brackets.
// Objects use curly brackets.



// JavaScript JSON methods

// 1.JSON.stringify()

// Converts JavaScript objects into JSON strings.

// const employeeData = {
//     name: "Adithya",
//     role: "Developer"
// };

// const jsonData = JSON.stringify(employeeData);

// console.log(jsonData);


// 2.JSON.parse()

// Converts JSON strings into JavaScript objects.

// const jsonString = '{"name":"Adithya","role":"Developer"}';

// const parsedData = JSON.parse(jsonString);

// console.log(parsedData.name);



// Request and Response Cycle

// Definition

// The request-response cycle describes how a client sends a request to a server and receives 
// the server's response.

// Request contains
// URL
// HTTP Method
// Headers
// Body

// Response contains
// Status Code
// Headers
// Response Body

// Example
// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then(response => response.json())
// .then(data => console.log(data));


// Execution flow
// Browser sends a request.
// Server receives the request.
// Server processes the request.
// Server sends a response.
// Browser receives the response.
// JavaScript processes the returned data.



// HTTP Status Codes
// Definition

// HTTP status codes indicate whether an HTTP request was successful, unsuccessful, or 
// requires additional action.

// Example

// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then(response => {

//     console.log("Status:", response.status);

//     if (response.status === 200) {
//         console.log("Request successful");
//     }

// })
// .catch(error => console.log(error));



// Fetch API
// Definition

// Fetch API is a built-in JavaScript feature used to send HTTP requests and 
// retrieve data from servers.

// Basic syntax

// fetch("API_URL")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));



// GET Request :This retrieves all users from the API.

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.log("Error:", error);
// });




// POST Request:

// fetch("https://jsonplaceholder.typicode.com/posts", {

//     method: "POST",

//     headers: {
//         "Content-Type": "application/json"
//     },

//     body: JSON.stringify({
//         title: "Learning React",
//         body: "Learning API Integration",
//         userId: 1
//     })

// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));



// Promise-Based API Calls
// Definition

// A Promise is a JavaScript object that represents the eventual success or failure
//  of an asynchronous operation.

// Three Promise states
// Pending – Operation is running.
// Fulfilled – Operation completed successfully.
// Rejected – Operation failed.


// Important Promise methods
// Method	Purpose
// .then()	Handles successful results
// .catch()	Handles rejected Promises
// .finally()	Executes after settlement



// const productPromise = new Promise((resolve, reject) => {

//     let productAvailable = true;

//     if (productAvailable) {
//         resolve("Product found successfully");
//     } else {
//         reject("Product not available");
//     }

// });

// productPromise
// .then(result => console.log(result))
// .catch(error => console.log(error))
// .finally(() => console.log("Operation completed"));



// Async/Await
// Definition

// Async/Await is a JavaScript feature that makes asynchronous code easier to write,
//  read, and manage.

// Important keywords
// async: Declares an asynchronous function.
// await: Waits for a Promise to settle.
// try: Contains code that may produce an error.
// catch: Handles errors.

// Example 1: Async Function
// async function getMessage() {

//     return "Welcome to React";

// }

// getMessage().then(message => {
//     console.log(message);
// });



// Example 2: Await
// async function getUser() {

//     const userResponse = await fetch(
//         "https://jsonplaceholder.typicode.com/users/1"
//     );

//     const userData = await userResponse.json();

//     console.log(userData);

// }

// getUser();
// Example 3: Async/Await with Error Handling
// async function getPosts() {

//     try {

//         const postResponse = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );

//         if (!postResponse.ok) {
//             throw new Error("Unable to fetch posts");
//         }

//         const postData = await postResponse.json();

//         console.log(postData);

//     } catch (error) {

//         console.log("Error:", error.message);

//     }

// }

// getPosts();

