# RESTful Web Service Implementation + Docker App

This project provides a basic template for dockerizing a Node.js application. It includes a sample Node.js app (app.js) and Docker files for containerization.

# Getting Started

Install Docker Desktop for your OS

Install Node.js for your OS

# Installing

1. Create a project folder for this app and copy all the files into the folder.

2. Open Docker and ensure that Docker is running. Test if it can create a test Docker container.

3. Open the Node.js command prompt and navigate to the project folder.

4. Run the command ```npm install``` to install all the required packages from the package.json file.

5. Once the packages are installed, you can test the app by running the command node app.js.

```node app.js```

6. Make sure the app runs successfully before proceeding to the next step.

7. Dockerize the app using the Docker files provided in the project folder. If necessary, make changes to the Docker files (e.g., port number).

8. Run the command docker compose up to deploy the app in a Docker container.

```docker compose up```

9. Now your app should be successfully deployed in a Docker container.

10. Visit ```http://localhost:<portnumber>```

You should be able to browse all the 4 routes in the app which shows customers data with details and order data with details.

## API End Points

Based on the JSON file, It has 4 GET routes in Valorant Store Data.

1) It Shows Customers data in ```/customers```

2) It shows Customer info in ```/customers/:id```
 
3) It shows Customer orders in ```/customers/:customerid/orders```

4) It shows Customer order details in ```/customers/:customerid/orders/:orderid```

