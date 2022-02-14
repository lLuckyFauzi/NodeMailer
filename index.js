const express = require('express')
const app = express()
const sendmail = require('./Helper/email');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/sendMail", async (req, res) => {
    await sendmail()
    res.json({ message: "Sending!" });
});

app.listen(3003, () => console.log("Listening at port: " + 3003));