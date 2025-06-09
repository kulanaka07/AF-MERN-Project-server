const Login = require('../models/Login');

const getAllLogin = async (req, res, next) => {
    Login.find()
        .then((logins) => {
            res.json(logins);
        })
        .catch((err) => {
            console.log(err);
        });
}; 

const loginCheck = async(req,res)=>{
    const{username,password}=req.body

    try{
        const check=await collection.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

};



const addLogin = async(req,res)=>{
    const{username,password}=req.body

    const data={
        username:username,
        password:password
    }

    try{
        const check=await collection.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

};

exports.addLogin = addLogin;
exports.getAllLogin = getAllLogin;
exports.loginCheck = loginCheck;