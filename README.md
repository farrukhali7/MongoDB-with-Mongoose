**** Exploring MongoDB with Mongoose ****

Over the past few days, I’ve been diving deep into how databases connect with the backend, and how we can build a complete CRUD (Create, Read, Update, Delete) flow in a MERN stack project.





    ==> Key Points in My Project

Here’s a summarized version of the tools I used and their roles:

MongoDB → The database where all data is stored permanently (e.g., client credentials, products, orders).

Mongoose → A Node.js library that connects the backend (Express) to MongoDB. It simplifies database operations by providing schemas, validation, and built‑in functions instead of raw queries.

Express → The backend framework that listens for client requests and provides routes like /users or /products.

Thunder Client → A VS Code extension that lets you send requests to the backend for testing. For example, sending a POST request → backend saves data → MongoDB stores it.

Mongosh → A shell tool to interact directly with MongoDB. It’s useful for verifying data with commands like db.users.find() to see all signed‑up users.



    ==> What I Built

I implemented routes in Express to handle CRUD operations:

POST → Save a new user or product.

GET → Fetch all users/products or a single one by ID.

PUT → Update an existing record.

DELETE → Remove a record from the database.

With Mongoose models and schemas, the data structure is defined clearly, and validation ensures only correct data is stored.



     ==> Flow of the Application

Here is a simple flow of what a client will go through:

Client opens the app → sees a signup/login form.

Client enters credentials → clicks “Sign Up”.

Frontend sends a POST request to backend (/users).

Express backend receives request → validates data → calls Mongoose.

Mongoose talks to MongoDB → saves the new user in the users collection.

MongoDB stores data permanently.

Backend responds → “User created successfully”.

Developer/Admin checks in Mongosh → verifies the new user document.



    ==> What I have removed before uploading this Project into GitHub:
    -> node modules
    -> extra files for mongosh and mongod
    (I have to remove because of the file size)
