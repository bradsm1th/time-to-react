# Weather (or not)
This is a simple weather app using Openweather's ["Current Weather Data" API](https://openweathermap.org/current).

After signing up, the app shows temperature and condition for your location.
You can also add other locations / other people. My original goal was to see what the weather is like for my family members "right now". 

## Screenshots

<figure>
<figcaption>The landing page</figcaption>
<!-- <img src="https://i.imgur.com/Ci3hVRy.png" alt="the 'landing' view"> -->
</figure>

<figure>
<figcaption><small>Viewing everyone's quotes</small></figcaption>
<!-- <img src="https://i.imgur.com/xr9o3fu.png" alt="the 'everyone\'s quotes' view"> -->
</figure>

<figure>
<figcaption><small>Viewing all your quotes and their annotations</small></figcaption>
<!-- <img src="https://i.imgur.com/mKPtuxw.png" alt="the 'index' view"> -->
</figure>

<figure>
<figcaption><small>Adding a quote</small></figcaption>
<!-- <img src="https://i.imgur.com/K0jfjVy.png" alt="the 'create' view"> -->
</figure>

<figure>
<figcaption><small>Updating a quote</small></figcaption>
<!-- <img src="https://i.imgur.com/GVmQSFK.png" alt="the 'update' view"> -->
</figure>

<figure>
<figcaption><small>Viewing a quote, adding annotations, and deleting a quote</small></figcaption>
<!-- <img src="https://i.imgur.com/hGXg8Zh.png" alt="the 'show' view"> -->
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

To try for yourself, just visit the hosted version:

<!-- [Commonplace Book](https://anxious-lion-tank-top.cyclic.app/) -->

## Possible Future Enhancements
### Alerts via NWS
There is a [separate API](https://www.weather.gov/documentation/services-web-api) from the National Weather Service that notifies you of weather alerts. I want to add that in addition so that Weather or Not can alert you to alerts in one of your people's locations. A simple checkbox that, if there's an active NWS alert for a location, reminds you to check in on that person.
Since this service is both **1)** US-only[^1] and **2)** a second API, I've shelved that for now.

[^1]: Many of my initial tests involved people in other countries, so I chose Openweather's API.

### Update
The initial goal was `CR_D` functionality, so it would be nice to add the ability to update your name or location, or to fetch more recent weather data.

### Geolocation API
This would be a fun and easy way to automatically update the logged-in user's location. I've only used it once before (and not recently) and simply ran out of time to implement it.