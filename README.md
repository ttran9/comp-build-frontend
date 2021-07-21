# Comp-Build-FrontEnd

- Demo

  - A running demo can be seen [here](https://www.compbuild.toddtran.com/)
  - Currently this is running on a Linode Ubuntu VM.
    - This was previously hosted on an AWS EC2 instance.
  - Backend repository [here](https://github.com/ttran9/comp-build-backend)

- This will house the code for the frontend.

  - I have decided to split the app up into individual repositories as this would be more practical instead of using webpack to compress the front end and running it from a deployed Java back-end.
    - The reason I do the above is because the Java back-end is just an API so the API shouldn't really be an index file (any views for the user) and instead I just want it to be an API that requires authentication for certain endpoints.

- Some issues I ran into while trying to deploy:

  - I was having an issue reading the proper configuration value but this was due to my building this app locally and then remotely transferring it via (scp) to a remote Ubuntu VM.
    - My fix for this was to just use the npm run build command on the remote VM.
  - I was having trouble finding a resource to set up Express to where it could handle 404 requests but I found this [thread](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually) to have the solution I was looking for.
    - My current solution is just to have "historyApiFallback: true" inside of the devServer key in the webpack configuration. One drawback is that I don't have a separate webpack config for development and production.

- TODO (Updated as of July 20th, 2021):
  - Refactor the code to use function based components.
  - Add tests with Jest.
  - Improve the error handling (such as looking up a computer build when one doesn't exist.)
    - This is partially done but needs improvement.
  - Improve error handling when the user goes to a page that doesn't exist.
  - Separate out the webpack configuration to a production one and a dev/test one.
