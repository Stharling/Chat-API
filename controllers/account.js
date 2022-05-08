import Account from "../model/account.js";
import JsonWebToken from "../utils/JsonWebToken.js";

export const createAccount = async (req, res)=>{
    const account = req.body;
    const accountDB = new Account({...account});
 
    try {
         const savedAccount = await accountDB.save();
         console.log("User added successfully");
         res.status(200).json(savedAccount);

    }catch(err ){
        console.log("Error adding User");
        res.status(500).json({ message: err });
    }
}

export const loginAccount = async (req, res)=>{
    const account = req.body;
    const accountDB = new Account({...account});
 
    try {
         let jwt = new JsonWebToken();
         var query = { email: accountDB.email, password: accountDB.password};
         Account.findOne(query, function (err, result) {
         if (!err){
            if(result != null) {
                let token = jwt.generateToken(accountDB.email)
                let responseLogin = {
                    user: accountDB.email,
                    token: token
                }
             console.log("User logged in");
             res.status(200).json(responseLogin);
            }else {
                res.status(200).json("User and password not match");
            }
             
         }
         else 
         {
            res.status(200).json("Error login user");
         }
        });
       
      }catch(err ){
        console.log("Error login User");
        console.log(err);
        res.status(500).json({ message: err });
    }
}