const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 8080
// app.use("/styles", express.static(path.join(__dirname, "./src/styles")))
// app.use("/img", express.static(path.join(__dirname, "./src/img")))
// app.use("/js", express.static(path.join(__dirname, "./src/js")))
app.use("/", express.static(path.join(__dirname, "./src")))
app.get("*", (req, res) => {
    return res.sendFile(path.join(__dirname, "./src/index.html"))
})
app.listen(port, () => console.log("server started on port:", port))

app.listen()