# Comp-Build-FrontEnd

- This will house the code for the frontend.

  - I have decided to split the app up into individual repositories as this would be more practical instead of using webpack to compress the front end and running it from a deployed Java back-end.
    - The reason I do the above is because the Java back-end is just an API so the API shouldn't really be an index file (any views for the user) and instead I just want it to be an API that requires authentication for certain endpoints.

- Some issues I ran into while trying to deploy:

  - So I was getting an error with my module not being able to be loaded I referred to this thread [here](https://github.com/mars/create-react-app-buildpack/issues/71) and I just realized the directories were case sensitive when being pushed to GitHub but not on my local system.
  - I was having trouble with webpack-dev-server not being detected so I just used this command "heroku config:set NPM_CONFIG_PRODUCTION=false" to ensure devDependencies are installed.
    - I also decided to just use the following command "heroku buildpacks:set heroku/nodejs" before deploying the application to Heroku.
  - I was having trouble finding a resource to set up Express to where it could handle 404 requests but I found this [thread](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually) to have the solution I was looking for.

- Demo
  - A running demo can be seen [here](https://todd-comp-build-frontend.herokuapp.com)
