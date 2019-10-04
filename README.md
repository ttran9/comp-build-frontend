# Comp-Build-FrontEnd

- This will house the code for the frontend.

  - I have decided to split the app up into individual repositories as this would be more practical instead of using webpack to compress the front end and running it from a deployed Java back-end.
    - The reason I do the above is because the Java back-end is just an API so the API shouldn't really be an index file (any views for the user) and instead I just want it to be an API that requires authentication for certain endpoints.

- Some issues I ran into while trying to deploy:
  - So I was getting an error with my module not being able to be loaded I referred to this thread [here](https://github.com/mars/create-react-app-buildpack/issues/71) and I just realized the directories were case sensitive when being pushed to GitHub but not on my local system.
