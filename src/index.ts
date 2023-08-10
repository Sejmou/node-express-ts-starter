import express from 'express';
import { greet } from '~/hello';

const port = process.env.PORT || 3000;

// defining the main function as async allows us to use await inside it, e.g. if our server needs to connect to a database
async function main() {
  console.log('Starting server...');

  await setup();

  const app = express();

  app.get('/', (req, res) => {
    const name = req.query.name || 'world';
    if (typeof name !== 'string') {
      res.status(400).send('Invalid name. Please provide a string.');
      return;
    }
    const helloMessage = greet(name);
    res.send(helloMessage);
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
  });
}

main();

async function setup() {
  // this is just here for demo purposes, remove or replace with something useful after you understand how it works
  // this could be a database connection, or some other async operation whose results are needed before the server can start
  await new Promise(resolve => setTimeout(resolve, 100));
}
