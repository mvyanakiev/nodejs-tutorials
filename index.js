import express from 'express'
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    // console.log(req)

    res.json({
        "hi": "hi"
    })

})

app.get("/", (req, res) => {
    // console.log(req)

    res.json({
        "hi": "hi"
    })

})

app.listen(3000, () => {
    console.log('app started')
})
