const express = require ('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 4043;
const app = express()

app.use(bodyParser.json())
app.use(cors())

//require or import router api from the folder routes 
const apiStudent = require('./routes/student')
const apiProf = require("./routes/prof")


app.use('/student', apiStudent)
app.use("/prof", apiProf)


app.listen(PORT, () => {
        console.log('server is running in the PORT: ' + PORT)
})
