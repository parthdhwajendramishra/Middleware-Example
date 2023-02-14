import express from 'express'
const router=express.Router()
import { contactController } from '../controllers/contactControllers.js'
import contactLogger from '../middlewares/logger-middleware3.js'
//Router level middleware

router.use(contactLogger)

router.get('/contact',contactController)

router.get('/event',(req,res)=>{
    res.send('Events')
})

export default router