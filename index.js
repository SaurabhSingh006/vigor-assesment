const express = require("express");

const app = express();

app.get('/api/v1/heartbeat', (req, res) => {
    res.status(200).json({
        status: true,
        message: "Heartbeat working properly"
    });
});

app.listen(5000, () => {
    console.log("Server is listening at port 5000");
});