# Example-app
An example application to showcase best practice and preferred technology stack.

## Prequisites

- [Node.js](https://nodejs.org/en)
- [Docker](https://docs.docker.com/get-docker/)

## Database setup

The API app is connected to a MySQL database which runs in a Docker container. The container is created using the config in the `docker-compose.yml` file. The environment variables used in the config are stored in a .env file.

-	Create a .env file in `example-app/api`, using `.env.example` as a starting point. 
-	Add your own values to the .env file and save the changes.
-   Open a terminal and navigate to the `example-app/api` directory.
-	`docker compose up` to create and run the container.
-   `npm run createTable` to create the to-do table.
-   `npm run seedTable` to populate the to-do table with data.
-   `npm run truncateTable` to remove all data from the to-do table if required.
-   `docker compose down` to stop and remove the container. This will not remove any data stored in the database.
-	`docker compose down –v` to stop and remove the container and its volumes. This will destroy the database and its data.

## Running the stack for local development

MySQL database:
-	Open a terminal and navigate to the `example-app/api` directory.
-   `docker compose up` to start the database container.
-	`ctrl c` to stop the container.

API app:
-   Open a terminal and navigate to the `example-app/api` directory.
-   `npm run api` to start the app.
-   `ctrl c` to stop the app.

Web app:
-	Open a terminal and navigate to the `example-app/web` directory.
-	`npm run web` to start the app.
-   Go to [localhost:8080](http://localhost:8080/) to interact with the app.
-	`ctrl c` to stop the app.
