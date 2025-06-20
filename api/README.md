# EXAMPLE APP API

## Structure

```
.
+-- src
|   +-- controllers
|   |   +-- ...
|   +-- database
|   |   +-- sql
|   |   |   +-- ...
|   +-- lib
|   |   +-- ...
|   +-- routes
|   |   +-- ...
|   +-- tests
|   |   +-- data
|   |   |   +-- ...
|   |   +-- integration
|   |   |   +-- ...
|   |   +-- unit
|   |   |   +-- ...
```

| Directory | Description                                                               |
|----------------|---------------------------------------------------------------------------|
| `controllers`  | Controller functions written with SQL                                     |
| `database/sql` | Connection function and scripts written with SQL                          |
| `lib`          | Shared helper functions                                                   |
| `routes`       | API routes                                                                |
| `tests`        | Test data, unit tests for controllers and integration tests for endpoints |

## API Endpoints

| Verb | Endpoint | Action |
|----------|---------------------|-------------------------------------------|
| `GET`    | `api/tasks`         | Returns all tasks from the to do list     |
| `GET`    | `api/tasks/:userId` | Returns a single task from the to do list |
| `POST`   | `api/tasks`         | Creates a new task                        |
| `DELETE` | `api/tasks/:userId` | Deletes a single task from the to do list |
