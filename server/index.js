import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/post.js';
const app = express();
app.use(bodyParser.json({
    limit: '30mb',
    extended: true
}))
app.use(bodyParser.urlencoded({
    limit: '30mb',
    extended: true
}))
app.use('/posts', postRoutes);
const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
mongoose.connect(
    CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log(`Server Runnig on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
mongoose.set('useFindAndModify', false);