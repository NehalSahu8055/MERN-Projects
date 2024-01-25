// ---------------------------------- API METHODS ---------------------------------------
import express from "express"

const foodmenu = [{
    "dalmakhani": "140",
    "rajmachawal": "100",
    "shahipaneer": "250",
    "vegrice": "80",
    "dosa": "100",
},
{
    "momos": "50",
    "chat": "40",
    "golgappe": "30",
    "manchurian": "80",
    "vadapav": "70",
}
]

const server = express()

// Initiate Server
server.listen(8080, () => {
    console.log("Server Started ...")
})

// APIS [ 5 ] - Endpoint- Route
server.get('/', (req, res) => {
    // res.send('<i>Express is Easy...</i>')
    // res.status(201).sendFile('D:/Reference/Backend/index.html')
    res.json(foodmenu)
    // res.sendStatus(404)
})

server.post('/', (req, res) => {
    res.json({ "dosa": "masalaDosa" })
})

server.put('/', (req, res) => {
    res.json({ "paneer": "shahipaneer" })
})

server.delete('/', (req, res) => {
    res.json({ "rice": "vegRice" })
})

server.patch('/', (req, res) => {
    res.json({ "dal": "dalMakhani" })
})


