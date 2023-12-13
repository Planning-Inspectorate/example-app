# Controllers

## What is a controller?
A controller is a function that takes a request, performs some logic, and sends a response. It's part of the MVC (Model-View-Controller) architecture.

The getToDoStart is a controller. It takes a request (req) and a response (res) object. It extracts baseUrl from the response's locals object, then uses res.render to render a view with a view model. This controller is very simple, you could even call it 'dumb' which is another pattern in MVC architecture.

## Keep them simple
"Dumb" controllers refer to controllers that have minimal logic. The main benefits of this approach are:

- Separation of Concerns: By keeping the controllers "dumb", we ensure that they only handle HTTP requests and responses. The business logic is kept in the service layer and utility functions, which makes the code more modular and easier to maintain.
- Testability: It's easier to write unit tests for controllers when they don't contain business logic. You can mock the services they use and focus on testing the HTTP handling logic.
- Reusability: When business logic is in the service layer or utilities, it can be reused by multiple controllers or even other services. This reduces code duplication.
- Simplicity: Keeping controllers simple makes the code easier to understand and reduces the chance of bugs.