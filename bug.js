const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    // This will cause an error since res.send is called after the response has been sent
    res.send('Hello');
    throw new Error('Something went wrong');
  }, 100);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});