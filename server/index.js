import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const express = require('express');

app.use(bodyParser.json({
    limit: "30mb",
    extended: true
}));
app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: true
}));
app.use(cors());
const CONNECTION_URL = "";

const PORT = process.env.PORT || 3000;
mongoose.connect(
    CONNECTION_URL,
    {
        useNewurlParser: true,
        useUnifiedTopology: true
    }
).then(() => app.listen(

))