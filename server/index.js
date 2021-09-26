import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

//https://cloud.mongodb.com/v2/6130f63d0be94e751fa53655#security/network/accessList
// const CONNECTION_URL = 'mongodb+srv://mernstackproject:mernstackproject123@cluster0.z51bk.mongodb.net/mernstackproject?retryWrites=true&w=majority';
const CONNECTION_URL = "mongodb://localhost:27017/mernstackproject";
// console.log("CONNECTION_URL===>", CONNECTION_URL);
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);
