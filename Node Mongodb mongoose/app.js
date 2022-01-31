const express = require('express')
const app = express()
const mongoose = require('mongoose')


const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    click: { type: Number, default: 0 }
})

const Link = mongoose.model('Link', linkSchema)

let link = new Link({
    title: "Mathdev",
    description: "Link para o instagram",
    url: "https://instagram.com/matheusvskt",

})

link.save().then(doc => {
    console.log(doc)
}).catch(err => {
    console.log(err)
})


mongoose.connect('mongodb://localhost/newlinks', {
    useNewUrlParser: true,
    useUnifiedTopoLogy: true
})

let db = mongoose.connection;

db.on("error", () => {
    console.log("Houve um erro")
});
db.once("open", () => {
    console.log(db)
})



app.get('/', (req, res) => res.send('Hello world'))

const PORT = 3000
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))