const { db } = require('./mongoose.js')
const {User} = require('./models.js')
const {Tweets} = require('./models.js')


// Middleware for Register 


const register = (req,res,next) => {
    const check = async() => {
        const{firstname,middlename,lastname,userid,usergender,userage,userphoneno,useremail,userpassword} = req.body
        try{
            const val = await User.find({UserID:userid})
            if(val.length!==0){
                res.status(200).send('Username already exists')
            }else{
                next()
            }
        }catch(error){
            res.status(404).send(error)
        }
    }
    check()
}


// Middleware for Logger

const logger = (req,res,next)=>{
    const {userid,userpassword,tweetmessage,tweetdate,logID} = req.body
    const log = async() => {
        try{
           if(logID===1){
            next()
           }else{
            res.status(200).json('You Must Login To Tweet')
            return
           }
        }catch(err){
            res.status(400).send(err)
            return
        }
    }
    log()
}

module.exports = {logger,register}



