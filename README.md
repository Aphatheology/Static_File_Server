# Static_File_Server
## A Nodejs Server by Group 11

1. The project should be initialized with npm and have one package to help monitor the development environment for file changes. This should have two automated npm scripts start which starts the project with node and start:dev which starts the project with nodemon.

2. Apart from the files and folders bootstrapped with npm, your folder structure should have a file named server.js and a sub-folder named pages.

3. The sub-folder pages should contain three HTML files namely index.html, about.html, and 404.html

Routing

The server should fulfill the below routes

/ : Home route
/about : About route
/sys : System route

1. When hitting the home route, the server should serve back the index.html page with the status code set to 200 and the content type to text/html

2. When hitting the about route, the server should serve back the about.html page with the status code set to 200 and the content type to text/html

3. When hitting the system route, the server should save information about the os in a file named osinfo.json with the status code set to 201, the content type to text/plain with the message "Your OS info has been saved successfully!" written back to the user. The osinfo.json file should contain the following attributes:

hostname: the os host name,
platform: the os platform,
architecture: the os architecture,
numberOfCPUS: the os number of cores,
networkInterfaces: os network interfaces,
uptime: os uptime


4. Hitting any other route which is not known by our server, we should be able to serve back the 404.html page with the status code set to 404

5. The logic should be under server.js
