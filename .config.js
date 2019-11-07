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
