# EXAMPLE APP API

## Structure

```
.
+-- src
|   +-- controllers
|       +-- ...
|   +-- database
|       +-- prisma
|       +-- sql
|           +-- ...
|   +-- lib
|       +-- ...
|   +-- routes
|       +-- ...
```

| Directory | Description |
|----------------|--------------------------------------------------|
| `controllers`  | Controllers written with SQL queries             |
| `database/sql` | Connection function and scripts written with SQL |
| `lib`          | Shared helper functions                          |
| `routes`       | API routes                                       |

## API Endpoints

| Verb | Endpoint | Action |
|----------|---------------------|-------------------------------------------|
| `GET`    | `api/tasks`         | Returns all tasks from the to do list     |
| `GET`    | `api/tasks/:userId` | Returns a single task from the to do list |
| `POST`   | `api/tasks`         | Creates a new task                        |
| `DELETE` | `api/tasks/:userId` | Deletes a single task from the to do list |
