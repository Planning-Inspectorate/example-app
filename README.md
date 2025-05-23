# Example-app
An example application to showcase best practice and preferred technology stack.

## Prequisites

- [Node.js](https://nodejs.org/en)
- [Docker](https://docs.docker.com/get-docker/)

## Installing dependencies

Run `npm ci` from the root of the project, the `api` directory and the `web` directory.

## Database setup

The API app is connected to a MySQL database which runs in a Docker container. The container is created using the config in the `docker-compose.yml` file. The environment variables used in the config are stored in a .env file.

-	Create a .env file in `example-app/api`, using `.env.example` as a starting point. 
-	Add your own values to the .env file and save the changes.
-   Open a terminal and navigate to the `example-app/api` directory.
-	`docker compose up` to create and run the container.
-   `npm run table:create` to create the to-do table.
-   `npm run table:seed` to populate the to-do table with data.
-   `npm run table:truncate` to remove all data from the to-do table if required.
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

## Running the tests

- To run all the tests in a directory, navigate to that directory and run `npm run test`
- To run a single test run `npm run test <file pathway>` from the directory.

## Generating API documentation

The API is documented using OpenAI (formerly Swagger).

- Navigate to the `example-app/api` directory.
- Run `npm gen-api-spec` to generate API spec as a JSON file.
- Run `npm run api`.
- View the documentation at `http://localhost:3000/api-docs/`.
