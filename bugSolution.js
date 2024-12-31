const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      res.send('Hello');
      throw new Error('Something went wrong');
    } catch (error) {
      console.error('Error after sending response:', error);
      // Log the error for monitoring and debugging.  Do not send it to the client.
    }
  }, 100);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});