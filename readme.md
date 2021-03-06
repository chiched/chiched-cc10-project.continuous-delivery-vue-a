# Frappa-Team-o ☕

An App to Search 'KFlyer' Truck Stop Locations around America

Premises:

*We have been hired by a truck stop company to create a single-page app so that travellers can search for truck stops based on a number of criteria.*

![img](https://lh6.googleusercontent.com/jSzLnj5LSF-K2jfbXXR_1O5vtMRTsLjOPBo_x-zlYrlV26a6s_pScmJL2WmjyZ3JS8mDn08sBV5WHAWE8ySpHfpQWhScs6ncz-wSTdV6UpIM3dd7LeDhaOPsf5vFIVLB2PaJBa52rQ)



## User's manual

You can use our app on your desktop or mobile phone. Just go to our homepage and you will see a map of all available stores and truckstops in the U.S.

Click on the dropdown to select your state and then click on the 'Search' button.

You will be taken to the results page that will show you a listing of all available truck stores or travel shops in your state.

The information will include:

- Address
- Phone and Fax number
- Highway and the Exit Number
- The Type of Rest Stop
- Number of Parking Spaces
- Number of DEF (Diesel Exhaust Fluid) lanes



## Development

Follow this guide to set up your environment etc.

### Database

This project assumes a Postgres database, naturally, this is not included in the `package.json` file, so must be installed separately.

If you are on Windows using WSL, [this blogpost](https://medium.com/@harshityadav95/postgresql-in-windows-subsystem-for-linux-wsl-6dc751ac1ff3) is very helpful.

Create a database called `truckstop`.

Create a `.config.js` file in the project root with this format:

```javascript
module.exports = {
  db: {
    client: "postgresql",
    connection: process.env.DB_URL || {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "truckstop",
      user: "exampleUsername", // <= Your command line username
      password: "examplePassword", // <= Your command line password
    },
  },
};
```

The migrations and seeds should automatically occur when the server is started using `yarn hack`.
However if you need to run them manually, please use `yarn migrate`, `yarn rollback`, and `yarn seed`.

### Technology used

![Artboard](Artboard.png)



### Demo

You can check out a production demo of the app [on Heroku!](https://frappa-team-o.herokuapp.com/)

### Future features

For now, you can filter on State, City, Highway, Stop Type & Restaurant. 

We will be adding more filters in the near future, such filters for Amenities (like WiFi) and other services (like Mechanics)

Those changes will be added gradually over the next weeks.

We will also add more info about the truck stores and travel shops.
