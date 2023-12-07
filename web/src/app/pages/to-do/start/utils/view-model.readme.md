# View models

## Why view models?
- We use view models to help us shape data before it is consumed by the view. E.g after making a api call in the controller and receiving a response, we would pass that response to the view model, which in turn can call a mapping function that would return that data in a desired format. 
- View models help to aggregate data from multiple sources into a single object that can be easily passed to the view.
- 