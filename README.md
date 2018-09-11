Assignment 3 - Full Stack: Basic Database-enabled Web Application using HTML/CSS/JS and Node.js  
===

This assignment is intended to be an introduction to databases in web applications, and as an opportunity for inviduals to expand on the skills learned thus far.

The baseline aims of this assignment involve creating an application that demonstrates an ability to construct a database-enabled web application.
In contrast to other assignments, the educational focus on this assignment is soley on the **back-end**, and rather than a combination of back-end and front-end.

You may use code from A2. However, I encourage you to start over for simplicity and practice, especially if your teammates for A2 wrote complicated code you'd have to work to grok.
**Warning: avoid situations in which you might attempt to use A2 code, but end up stuck because some portion of the code is tricky and difficult to use in a new application. It is much better to start from scratch and build a simple editable results page.**

Baseline Requirements
---

In this assignment, you are encouraged to keep it simple on the front-end and general application area.
Instead, focus on creating a solid `server`, which includes, among other features, some basic database functionality.

Your application is required to implement the following functionalities:

- a `Server` which not only serves files, but also maintains a dataset stored and accessed through a database.
- a `Data-Modification` front-end interface allows the user to create, read, update, AND (;)), delete items in the database, aka CRUD operations.
    - Note: An editable table (or possibly a form+table combo) is a straightforward way of meeting these requirements. But neither of these specific methods are required, as there are many possible applications that use all CRUD features.


Your application is required to demonstrate the use of the following concepts:

HTML:
- Any method of displaying and editing results pulled from the database.

CSS:
- Any method of CSS.

JavaScript:
- At least 4 XMLHTTPRequests, one for each of the CRUD operations:
    - Read: one XMLHTTPRequest should pull all data from the server, and immediately update a DOM element. For example: retrieving a list of movies as an array, iterating through the array, and building a movies list in HTML
        - Note: you could also read single elements at a time, but this may lead to more work on your front-end code.
    - Create: one XMLHTTPRequest to create a 'row' in the database. This request should be sending a **single** line of data to the server, and the server should store the data via database operations.
    - Update: one XMLHTTPRequest to update a 'row' in the database. This request should be sending a **single** line of data to the server, and the server should update the data via database operations. (HINT: unique alphanumeric IDs as part of each row of your data make it possible for you to easily retrieve a single row from the database.)
    - Delete: one XMLHTTPRequest that deletes a 'row' in the database. (HINT: again, with an alphanumeric ID as part of your dataset, you can pass a "Delete" command from the client to the server with a single variable, the ID, and easily identify the database row to be deleted.)
- Think about how you might implement each operation in a cohesive way. Consider, for example, an 'X' button on some user-created element for delete; a '+' symbol for adding a new user-defined element; some symbol for editing the element, etcetera. Forms are also a valid approach, and there are still other possiblities.

Node.js:
- An HTTP Server that delivers all files necessary for operation, and:
    - Request "routes" with any necessary URL parsing
    - Functions for each of the CRUD operations, triggered by corresponding XMLHTTPRequests on the front-end.
        - Hint: to craft your database query, you will likely be modifying a string. This string is then usually passed to a function in your database library, like `db.execute("Select * from ...")`

Database:
- Any of the databases discussed in class are appropriate for this assignment.
    - If you are using `heroku`, make sure you check to see if the database of your choice is compatible! Many folks end up using a `Postgres database` since it is historically supported by `heroku`.
    - At your own risk, you may explore other hosting options. 
    
One final tip: build this application slowly and systematically test lines of code as you write them. Writing more than a few lines of code before a test run can lead to hard-to-diagnose bugs.

Deliverables
---

Do the following to complete this assignment:

1. Fork the starting project code. This time, you are encouraged to start the entire project from scratch.
2. Implement your project with the above requirements.
3. Test your project to make sure that when someone goes to your main page, it displays correctly.
4. Deploy your project to Heroku.
5. Ensure that your project has the proper naming scheme `a1-yourGitHubName` so we can find it.
6. Modify the Readme to the specifications below.
7. Create and submit a Pull Request to the original repo.

Sample Readme (delete the above when you're ready to submit, and modify the below so with your links and descriptions)
---

## Your Name | Web Application Title
Include a very brief summary of your project here.
Images are encouraged, along with concise, high-level text.

## Technical Achievements
- **Tech Achievement 1**: Using a combination of...
- **Tech Achievement 2**: ...

### Design/Evaluation Achievements
- **Design Achievement 1**: Shown in `style.css`, the code...
- **Design Achievement 2**: We tested the application with n=X users, finding that...
