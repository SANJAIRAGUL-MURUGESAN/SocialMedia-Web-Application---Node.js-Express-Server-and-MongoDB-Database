const express = require('express') 
const app = express()
const {db} = require('./mongoose.js')
const {User} = require('./models.js')
const {Tweets} = require('./models.js')
const {register} = require('./middleware.js')
const {logger} = require('./middleware.js')

// Importing express.json() and express.urlencoded() to undergo Json Format and Encoded Functoin 

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Registration (Adding User Information into the collection named USERS)

app.post('/user/register',register,(req,res)=>{
    const{firstname,middlename,lastname,userid,usergender,userage,userphoneno,useremail,userpassword} = req.body
        const add = new User({
            FirstName : firstname,
            MiddleName : middlename,
            LastName : lastname,
            UserID : userid,
            UserGender : usergender,
            UserAge : userage,
            UserPhone : userphoneno,
            UserEmail : useremail,
            UserPassword : userpassword
        })
        add.save()
    res.status(200).send('Registered Successfully')
})


// User Logging In with UserName and UserPassword with Validation and Verification 

app.post('/user/login',(req,res) => {
    const {userid,userpassword} = req.body
    const log = async() => {
        try{
            const user = await User.find({UserID:userid})
            if(user.length===0){
                res.status(200).send('Invalid UserID')
                return
            }else{
                const upassword = user[0].UserPassword
                if(upassword===userpassword){
                    res.status(200).send('1')
                }else{
                    res.status(200).send('Invalid Password')
                }
            }
        }catch(err){
            res.status(400).send(err)
        }
    }
    log()
})


// Adding particular Tweets of an Particular User into the Collection named TWEETS

app.post('/user/tweet',logger,(req,res) => {
    const {userid,userpassword,tweetid,tweetmessage,tweetdate} = req.body
    const add = new Tweets({
        UserID : userid,
        UserPassword : userpassword, 
        TweetMessage : tweetmessage,
        TweetID : tweetid,
        TweetDate : tweetdate 
    })
    add.save()
    res.status(200).send('Tweeted Successfully')
})



// Fetching Whole Set of Tweets of All Users


app.get('/tweets/fetchall',logger,(req,res)=> {
    const alltweets = async() => {
        const data = await Tweets.find()
        if(data.length===0){
            res.status(200).send('No Tweets')
        }else{
            res.status(200).json(data)
        }
    }
    alltweets()
})



// Deleting Particular Tweets of an Particular User


app.post('/tweet/delete',logger,(req,res) => {
    const {userid,tweetid} = req.body
    const del = async() => {
        try{
            const deletetweet = await Tweets.remove({UserID:userid,TweetID:tweetid})
            if(deletetweet.deletedCount===1){
                res.status(200).send('Tweets Deleted Successfully')
            }
        }catch(err){
            res.status(404).send(err)
        }
    }
    del()
})

// Server Listening to a Particular Port

app.listen(5000 , () => {
    // To Make the Developer know whether Server is Started Listening to Particular Port  
    console.log('Server Listening to Port Number 5000...')
})

