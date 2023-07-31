// Author: Vaidik Ashishbhai Patel
//Student N0: 200494967
//Stripe API - Group Tutorial 

const express = require('express')

const bodyParser = require('body-parser')

const path = require('path')

const PUBLISHABLE_KEY = "pk_test_51NXsWICoPXrP5yjj55pKhxsCLOoM1VMDSYsZ6mKof8AN5phLidbPQUuq4yWDqWw65HmQFFhNpJy36zJy92tBJfoJ00gxGBzFO3"

const SECRET_KEY = "sk_test_51NXsWICoPXrP5yjjTCphCukp6wlp5JyxVYheoLQMIFibRPhZQaAX4jklJlG6R3V9qnjWPlyswxd7iFjgCzfLWoiI00NuneB9QM"

const app = express()

app.set("view engine", "ejs")

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000

app.get('/', (req, res) =>{
    res.render('Home', {
        key:PUBLISHABLE_KEY
    })
})

app.listen(PORT, () =>{
    console.log('App is running on localhost:3000')
})