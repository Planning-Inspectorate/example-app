# EXAMPLE APP API

## Structure

```
.
+-- src
|   +-- controllers
|   |   +-- ...
|   +-- database
|   |   +-- repositories
|   |   |   +-- ...
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
|   |   |   +-- controllers
|   |   |   |   +-- ...
|   |   |   +-- repositories
|   |   |   |   +-- ...
```

| Directory | Description                                                                                                  |
|----------------|--------------------------------------------------------------------------------------------------------------|
| `controllers`  | Controller functions to get, add and delete tasks.                                                           |
 | `database/repositories` | Functions written with SQL and called in controllers to interact with the database.                          
| `database/sql` | Connection function and database scripts written with SQL.                                                   |
| `lib`          | Shared helper functions.                                                                                     |
| `routes`       | API routes.                                                                                                  |
| `tests`        | Test data, integration tests for endpoints and unit tests for controller functions and repository functions. |


