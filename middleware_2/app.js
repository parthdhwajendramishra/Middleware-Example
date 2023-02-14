import express from 'express'
import myLogger from './middlewares/logger-middleware.js'
import aboutLogger from './middlewares/logger-middleware2.js'
const app=express()
const port=process.env.PORT || '3000'
import web from './routes/web.js'
import contact from './routes/contact.js'


//Setting Template Engine
app.set('view engine','ejs')

//Application level middleware

//This middleware is without path so it will work on all paths
app.use(myLogger)

//This middleware has a path(i.e. '/about') so it will work only on about path
app.use('/about',aboutLogger)

//Routes
app.use('/',web)
app.use('/',contact)

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})