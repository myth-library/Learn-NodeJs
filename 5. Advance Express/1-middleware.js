/* Middleware:
      + is a function
      + this function takes request object and,
              - return response to the client or
              - passes control to another middleware function */

app.get('/', (req, res) => {
  res.send('Hello World');
});
// app.get(): route handler
// (req, res) => {}: this callback fn. is technically middleware fn.

/* server එකට ලැබෙන හැම request එකක්ම request processing pipeline
   එකේ middlewares through ගමන් කර අවසානයේ response return කරයි */
