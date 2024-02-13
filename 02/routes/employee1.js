import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome e1')
})


router.post('/', (req, res) => { // curl --location 'http://localhost:3000/e1' --header 'Content-Type: application/json' --data '{"name": "Gosho"}'
   
    const name = req.body.name;

    if (name) {
        res.status(201)
        res.send(`Hello ${name}`) // Hello Gosho
    } else {
        res.status(400).send() // // Bad requst
    }
})

export {
     router as r1
    }
