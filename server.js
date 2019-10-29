const express = require('express');
const cors = require('cors');
const mainRouter = require('./routers/mainRouter');
let app = express();

app.use(cors());

app.use('/', mainRouter);

app.listen(process.env.PORT || 3000, () => console.log(`server running on port ${process.env.PORT || 3000}`));