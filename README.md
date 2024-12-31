# Express.js Server Error After Sending Response

This repository demonstrates a subtle bug in an Express.js server where an error is thrown after a response has already been sent to the client.  This can happen when asynchronous operations within a request handler complete after the response has been sent.  The error might not be immediately apparent and can lead to unpredictable behavior, especially under high load.

## Bug Description
The bug occurs in `bug.js`. A simulated asynchronous operation throws an error after `res.send()` has already been called. Node.js will not handle this thrown error gracefully, potentially leading to issues with logging, monitoring and unexpected server behavior.

## Solution
The solution (`bugSolution.js`) demonstrates how to use error handling within asynchronous operations that accounts for the possibility that the response may have already been sent. It uses a try-catch block, checking the status code of the response before sending additional responses.