import express from 'express'
// import passport from 'passport'
const app = express()

app.use(express.json()) // enable json deserialising


// passport.use(new JWTStrategy(xsenv.getServices({xsuaa:{tag:'xsuaa'}}).xsuaa));

// app.use(passport.initialize());
// app.use(passport.authenticate('JWT', { session: false }));


app.use((req, res, next) => {
    console.log('middleware called') // Изпълнява се преди метода за ендпоинта. Филтри, security и др.
    res.json({
        "used method": req.method
    })
    next() // предава изпълнението нататък
})


app.get("/", (req, res) => {
    res.json({
        "hi": "hi"
    })
})

app.all("/all", (req, res) => { // ALL methods Post, Get..
    console.log(req.method)
    res.json({
        "key": "ALL"
    })
})

app.post("/parameter/:xyz", (req, res) => { // curl -X POST 'localhost:3000/parameter/123'
    console.log(req.params) // { param: '123' }
    console.log(req.params.xyz) // 123
})

app.post("/query", (req, res) => { // curl -X POST 'localhost:3000/query?abc=123&xyz=456'
    console.log(req.query) // { abc: '123', xyz: '456' }
    console.log(req.query.xyz) // 456
})

app.listen(3000, () => {
    console.log('app started')
})
