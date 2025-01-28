# Node.js Server Unresponsiveness Due to Blocking Operation

This repository demonstrates a common issue in Node.js applications: server unresponsiveness caused by long-running synchronous operations that block the event loop.  The `bug.js` file contains code that simulates this problem.  The `bugSolution.js` file provides a solution using asynchronous operations.

## Problem

Node.js is single-threaded, relying on an event loop to handle requests.  When a synchronous operation takes a long time to complete, it blocks the event loop, preventing the server from responding to other requests. This leads to unresponsive behavior, potentially causing timeouts and affecting performance.

## Solution

The solution involves using asynchronous operations (e.g., using promises, async/await, or callbacks) to avoid blocking the event loop.  This allows the server to continue processing other requests while the long-running operation completes in the background.

## How to run

1. Clone the repository.
2. Navigate to the cloned directory.
3. Run the `bug.js` file using `node bug.js`.  Observe the server's behavior.
4. Then run the `bugSolution.js` file using `node bugSolution.js`. Note the difference in behavior.

## License

MIT