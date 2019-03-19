const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
// basic express to serve up static files.
app.use(express.static(path.join('././public')));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
