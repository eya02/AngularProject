const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3001, () => {
    console.log("The server started on port 3001 !!!!!!");
});

app.get("/", (req, res) => {
    res.send(
        "<h1 style='text-align: center'>e-mail has been send  <br><br>😃👻😃👻😃👻😃👻😃</h1>"
    );
});

app.get("/send", (req, res) => {
    res.send(
        "<h1 style='text-align: center'>e-mail has been send <br><br>😃👻😃👻😃👻😃👻😃</h1>"
    );
    console.log('waa');
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


});
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'eyabellil44@gmail.com',
        pass: 'lool@@*<3'
    }
});

var mailOptions = {
    from: 'eyabellil44@gmail.com',
    to: 'eyabellil44@gmail.com',
    subject: 'Bloging',
    text: `Congratulation you have made a new blog`
};


