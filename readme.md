# Frappa-Team-o ☕

An App to Search 'KFlyer' Truck Stop Locations around America

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
        user: "postgres",       // <= Your command line username
        password: "postgres",   // <= Your command line password
      },
    }
  };
```

The migrations and seeds should automatically occur when the server is started using `yarn hack`.
However if you need to run them manually, please use `yarn migrate` and `yarn rollback`.