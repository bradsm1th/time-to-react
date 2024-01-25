# Weather (or not) [Single-page React App]
This is a simple weather app using Openweather's ["Current Weather Data" API](https://openweathermap.org/current).

After signing up, the app shows the most recent temperature and conditions for **your** location.
You can add other locations / other people to see their weather, as well. My original goal was to see what the weather is like for my friends and family members "right now". 

## Screenshots

<!-- <figure>
<figcaption>The login page</figcaption>
<img src="https://i.imgur.com/UAGkVGG.png" alt="the login page">
</figure> -->

<figure>
<figcaption><strong>The signup page</strong></figcaption>
<img src="https://i.imgur.com/alV7JP5.png" alt="the signup page">
</figure> 

<figure>
<figcaption><strong>The main view</strong></figcaption>
<img src="https://i.imgur.com/xRe9zJW.png" alt="the main view">
</figure>

## Technologies Used

- Express
- HTML, CSS, JavaScript
- JWT (for webTokens)
- Node.js
- Mongoose
- MongoDB Atlas
- React
- Semantic UI

## Getting Started

The app is currently not hosted, but if you fork and clone the repo and run `npm install`, you'll be able to try for yourself.

**Note**: You will need a free API key from Openweather.

<!-- [Commonplace Book](https://anxious-lion-tank-top.cyclic.app/) -->

## Possible Future Enhancements
### Alerts via NWS
There is a [separate API](https://www.weather.gov/documentation/services-web-api) from the National Weather Service that notifies you of weather alerts. I want to add that in addition so that Weather or Not can alert you to alerts in one of your people's locations. A simple checkbox that, if there's an active NWS alert for a location, reminds you to check in on that person.
Since this service is both **1)** US-only[^1] and **2)** a second API, I've shelved that for now.

[^1]: Many of my initial tests involved people in other countries, so I chose Openweather's API.

### Update
The initial goal was `CR_D` functionality, so it would be nice to add the ability to update your name or location, or to fetch the most recent weather data.

### Geolocation API
This would be a fun and easy way to automatically update the logged-in user's location. I've only used it once before (and not recently) and simply ran out of time to implement it.

### Miscellaneous
- embed fonts (current is IA Writer Duospace)
- more color
- some hover/animation effects
- multiple ways to view friend data (text only, icon only, Celsius instead of Fahrenheit, etc.)

---
