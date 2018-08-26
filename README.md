Neighborhood Map
===
![](img/appLargeScreen.PNG)
This app was build using create-react-app (https://github.com/facebook/create-react-app) and uses the react-google-maps(https://github.com/tomchentw/react-google-maps) library.
To see the live version of the app, click https://pikabe.github.io/neighbourhood-map/ .

App Description
---
This application allows user to access information about five different locations using the foursquare API.
The application renders markers at five different locations on a map using the google maps API. The locations can also be accessed using the app's side navigation menu, which renders the names of the locations. Locations and markers can be filtered using the input provided in the menu and when a location is chosen, an infobox opens at the location's position on the map with details about the chosen location.

Installation and Configuration
---

To download this app,
1) Click the Clone or Download button then Download Zip.
2) Once downloaded, open the project's terminal and run the following commands,
```
npm install

```
```
npm install -g serve

```
```
serve -s build

```
3) navigate to http://localhost:5000/ to view the app.

Usage
---

External API used
---
foursquare https://developer.foursquare.com/places-api
