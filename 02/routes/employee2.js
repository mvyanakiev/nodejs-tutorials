import express from 'express'

const router = express.Router()

router.get('/', (req, res) => { // curl --location 'http://localhost:3000/e2'
    res.send('Welcome e2')
})


router.post('/', (req, res) => { // curl --location 'http://localhost:3000/e2' --header 'Content-Type: application/json' --data '{"name": "Gosho"}'
   
    const name = req.body.name;

    if (name) {
        res.status(201)
        res.send(`Bye ${name}`) // Bye Gosho
    } else {
        res.status(400).send() // // Bad requst
    }
})


export {
    router as r2
   }
