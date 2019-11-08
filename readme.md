# Frappa-Team-o ☕

An App to Search 'KFlyer' Truck Stop Locations around America

Premises: 

*We have been hired by a truck stop company to create a single-page app so that travellers can search for truck stops based on a number of criteria.*

![img](https://lh6.googleusercontent.com/jSzLnj5LSF-K2jfbXXR_1O5vtMRTsLjOPBo_x-zlYrlV26a6s_pScmJL2WmjyZ3JS8mDn08sBV5WHAWE8ySpHfpQWhScs6ncz-wSTdV6UpIM3dd7LeDhaOPsf5vFIVLB2PaJBa52rQ)

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
      user: "postgres", // <= Your command line username
      password: "postgres", // <= Your command line password
    },
  },
};
```

The migrations and seeds should automatically occur when the server is started using `yarn hack`.
However if you need to run them manually, please use `yarn migrate`, `yarn rollback`, and `yarn seed`.

### Technology used

<img style="float:left;height:25px;" src="https://lh5.googleusercontent.com/MbeMJpHR5Ndpfqwk_9VDv1ZJu9dIHOPoCuc-Z9PnRU-3_pw9ap6OA90jj6jq_QGBUM_RDZrJNTvth2zdBFpQBOK00VVzQ_FW391hGGx6YCisVVgcLLyamWTKzF5GSZv2KpoC5TpPLg" alt="img" style="zoom:25%;" />

<img src="https://lh6.googleusercontent.com/cY6UxWkk0uXZimvZUx-S89-ShHn9aLXEiHikmPkx9DuEGo27UI1cL6tlBOI1v1neeTOkjXewcu9xhXXpZ2Y3JtUU4PwBcgaurwPbnWvTnJXcQqqdftROhbHrbDlx5Xh-6ZF7pnQ7GA" alt="img" style="zoom:8%;" />
