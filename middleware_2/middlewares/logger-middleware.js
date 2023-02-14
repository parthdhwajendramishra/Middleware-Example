var myLogger =(req,res,next)=>{
    console.log("Application Level Middleware Logged")
    next()
}

export default myLogger