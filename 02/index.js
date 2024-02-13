import express from 'express'
import { r1 } from './routes/employee1.js'
import { r2 } from './routes/employee2.js'
const app = express()

app.use(express.json())
app.use('/e1', r1)
app.use('/e2', r2)

app.listen(3000, () => {
    console.log('app 02 started')
})
