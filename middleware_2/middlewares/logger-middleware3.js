var contactLogger =(req,res,next)=>{
    console.log("Contact Route Leve Middleware Logged")
    next()
}

export default contactLogger