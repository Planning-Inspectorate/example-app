# Page views

## What's a View?
In the Model-View-Controller (MVC) pattern, the "View" is responsible for rendering the page users will see. It takes data from the model applies it to the template and is rendered to the user.

## Why are we using them?
The benefits of using views in the MVC pattern:

- Separation of Concerns: Views only handle the presentation of data. They don't contain business logic or directly manage data, making the code easier to manage and understand.
- Reusability: Views can be reused across different parts of an application. For example, a view used to display a list of items could be used in multiple places.
- Simplicity: By separating the view from the model and controller, developers can focus on one aspect of the software at a time. This makes the development process simpler and more efficient.
- Flexibility: Views can be easily changed or replaced without affecting the underlying business logic or data management. This makes it easier to update the user interface or support multiple interfaces.