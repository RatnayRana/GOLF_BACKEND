import express from "express"


const userRouter = express.Router()

userRouter.post('/login',(req,res)=>{
    console.log("Here i am")
});


export default userRouter;