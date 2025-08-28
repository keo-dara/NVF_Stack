const { Client } = require('pg');
const { databaseUser, databaseNormal } = require('./config');

// Function to connect to a database and handle connection
async function connectToDatabase(client, dbName) {
  try {
    await client.connect();
    console.log(`Database ${dbName} connected successfully`);
  } catch (err) {
    console.error(`Error connecting to ${dbName} database:`, err.message);
    throw err; // Rethrow to handle in Promise.all
  }
}

// Initialize clients
const userClient = new Client(databaseUser);
const normalClient = new Client(databaseNormal);

// Connect to both databases and exit on success
Promise.all([
  connectToDatabase(userClient, 'user management'),
  connectToDatabase(normalClient, 'normal')
])
  .then(() => {
    console.log('All databases connected successfully. Exiting process.');
    userClient.end();
    normalClient.end();
    process.exit(0);
  })
  .catch(err => {
    console.error('Failed to connect to one or more databases:', err);
    userClient.end();
    normalClient.end();
    process.exit(1);
  });
