const express = require("express");

const app = express();
const port = 5500

// user routes middleware file
const userRoutes = require("./routes/userRoute")

app.use("/api/users", userRoutes)

// questions routes middleware file

// answers routes middleware file


app.listen(port, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(`listenning on ${port}`)
    }
})