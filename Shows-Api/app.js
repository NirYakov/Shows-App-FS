const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();


const connectToMyMongo = require("./connectDb");


////// invoke connection to mongoDB
connectToMyMongo();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    next();
});


app.get("/api/health", (req, res, next) => { res.status(200).json({ health: "Online ! :)" }); })

app.get("/api/test", async (req, res, next) => {


    let responseApi = "none";

    const searchShow = "inception 2010";

    const urlApi = `https://imdb-api.com/en/API/Search/${process.env.ApiKey}/${searchShow}`;

    console.log(urlApi);

    // req from rate api
    await axios({
        method: 'get',
        url: urlApi,
    })
        .then((response) => {
            // rateCAN = response.data.rates.CAD;
            // rateEuro = response.data.rates.EUR;

            responseApi = response;
            // console.log(response);


        }).catch(e => {
            console.log({
                message: "oops :(",
                error: e,
            })
        });

    responseApi = responseApi.data;

    res.status(200).json({
        health: "Online ! :)",
        responseApi
    });
})




module.exports = app;
